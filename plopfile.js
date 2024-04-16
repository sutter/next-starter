const { readdirSync, existsSync, mkdirSync } = require("fs")
const path = require("path")

const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required"
    }
    return true
  }
}

const getDirectories = (source, base = "") =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .reduce((acc, dirent) => {
      const subdir = path.join(base, dirent.name) // Chemin relatif sans le préfixe
      const children = getDirectories(path.join(source, dirent.name), subdir)
      return acc.concat({ name: subdir, value: subdir }, children)
    }, [])

const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath)
  if (existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  mkdirSync(dirname)
}

// Function to format the Storybook title to include the directory
const formatStoryTitle = (directory, componentName) => {
  if (directory) {
    return `${directory.toUpperCase()}/${componentName}`
  }
  return componentName
}

module.exports = (plop) => {
  const componentDirectories = [
    { name: "Root", value: "" },
    ...getDirectories("./components"),
  ]

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: requireField("name"),
      },
      {
        type: "list",
        name: "directory",
        message: "Choose directory or Root for main directory:",
        choices: componentDirectories,
      },
      {
        type: "confirm",
        name: "includeStories",
        message: "Do you want to include a Storybook file?",
        default: true,
      },
    ],
    actions: (data) => {
      const componentName = plop.getHelper("pascalCase")(data.name)
      const basePath = data.directory
        ? `./components/${data.directory}`
        : "./components"
      const formattedTitle = formatStoryTitle(data.directory, componentName)

      const actions = [
        {
          type: "add",
          path: `${basePath}/{{pascalCase name}}.tsx`,
          templateFile: "plop-templates/component.tsx.hbs",
          beforeAdd: ensureDirectoryExistence,
        },
      ]

      if (data.includeStories) {
        actions.push({
          type: "add",
          path: `${basePath}/{{pascalCase name}}.stories.tsx`,
          templateFile: "plop-templates/component.stories.tsx.hbs",
          data: { storyTitle: formattedTitle },
          beforeAdd: ensureDirectoryExistence,
        })
      }

      return actions
    },
  })
}
