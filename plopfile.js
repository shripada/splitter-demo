/* eslint-disable */
const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setActionType('runFormat', function (answers) {
    const exec = require('child_process').exec;
    const command = 'npm run format';
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failed to run format: ${error}`);
        return;
      }
    });
  });

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component name?',
        validate: requireField('componentName'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx',
        templateFile: 'plop-templates/component/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/types.ts',
        templateFile: 'plop-templates/component/types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'runFormat',
      },
    ],
  });
};
