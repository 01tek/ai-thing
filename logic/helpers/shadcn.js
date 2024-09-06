const { exec } = require('child_process');

/**
 * List of available component names.
 * These components are used to dynamically construct and run shell commands.
 */
const componentsList = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'form', 'hover-card', 'input', 'input-otp', 'label', 'menubar', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group', 'resizable', 'scroll-area', 'select', 'separator', 'sheet', 'skeleton', 'slider', 'sonner', 'switch', 'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip',
];

/**
 * Executes a shell command to add a Shadcn/ui component using `npx`.
 * 
 * @function runComponentCommand
 * @param {string} component - The name of the component to be added. Must be one of the components listed in `componentsList`.
 * @returns {void}
 * 
 * @example
 * Running the function with the component name 'button':
 * runComponentCommand('button');
 * 
 * @throws {Error} If the component name is not found in the `componentsList`.
 * @throws {Error} If the shell command execution fails.
 * 
 * @description
 * This function checks if the provided component exists in the predefined `componentsList`.
 * If found, it constructs a command using the `npx shadcn@latest add <component>` syntax and executes it.
 * If the component is not found or there is an error during execution, it logs an error to the console.
 */

export function runComponentCommand(component) {
  // Check if the component exists in the list
  if (componentsList.includes(component)) {
    // Construct the command
    const command = `npx shadcn@latest add ${component}`;

    // Execute the command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error output: ${stderr}`);
        return;
      }
      console.log(`Command output: ${stdout}`);
    });
  } else {
    console.error(`Component "${component}" not found in the components list.`);
  }
}
