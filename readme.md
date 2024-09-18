# ai-thing

**ai-thing** is an innovative React utility that generates UI components directly from natural language descriptions. Whether you need to rapidly prototype or want to streamline your development process, **ai-thing** accelerates component creation by interpreting plain English into fully functional React components. 

The library supports multiple UI frameworks, including Material-UI (MUI), Bootstrap, Ant Design, Chakra UI, and Semantic UI, allowing you to configure your project with the framework of your choice.

## Features

- **Natural Language to UI**: Write simple English descriptions, and **ai-thing** will generate corresponding React components with inferred properties.
- **Framework Agnostic**: Use popular UI frameworks like MUI, Bootstrap, Ant Design, Chakra UI, and Semantic UI. Simply configure your preferred framework.
- **Customizable**: While the generated components include default properties based on descriptions, you can easily override them for custom behavior.
- **Scalable**: Extendable to support more frameworks and components in the future.
- **NLP-Powered**: **ai-thing** uses natural language processing (NLP) to infer component types and their properties intelligently.

## Installation

Install **ai-thing** via npm:

```bash
npm install ai-thing
```

## Getting Started

### Step 1: Import and Configure

Start by configuring your preferred UI framework. **ai-thing** supports MUI, Bootstrap, Ant Design, Chakra UI, and Semantic UI. You can switch frameworks at any time.

```js
import aiThing from 'ai-thing';

// Configure the framework (e.g., MUI, Bootstrap, etc.)
aiThing.configureFramework('mui');
```

### Step 2: Generate Components from Descriptions

Use `ai.gen` to describe your components in natural language. **ai-thing** will translate these descriptions into ready-to-use React components.

```js
const Button = await aiThing.gen('A large blue button labeled "Submit"');
const Layout = await aiThing.gen('A grid layout with 3 equally spaced columns.');
const Select = await aiThing.gen('A dropdown menu with options: Podcast, Book, Movie.');
```

### Step 3: Render Your Components

The components returned by `aiThing.gen` are React components that you can directly use in your application. You can also pass additional props when rendering them.

```js
export const App = () => {
  return (
    <Layout>
      <Select />
      <Button disabled />
    </Layout>
  );
};
```

## Example Usage

```js
import aiThing from 'ai-thing';

aiThing.configureFramework('bootstrap');

const App = async () => {
  const Button = await aiThing.gen('A primary button labeled "Continue"');
  const Input = await aiThing.gen('A text input field with a placeholder "Enter your name"');

  return (
    <div>
      <Input />
      <Button />
    </div>
  );
};
```

## Supported Frameworks

**ai-thing** currently supports the following React UI frameworks:
- **Material UI (MUI)**
- **Bootstrap**
- **Ant Design**
- **Chakra UI**
- **Semantic UI**
- **Shadcn-ui**

Feel free to suggest other frameworks or contribute to expanding the supported frameworks!

## Testing

We use **Jest** for testing. If you’d like to run the tests:

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

This will run the suite of unit tests that ensure the functionality of the NLP parser, component mapper, and overall framework integration.

## Contributing

We welcome contributions from the community! Here are some ways you can help:

1. **Feature Requests**: If you have ideas for new features or enhancements, feel free to open an issue on our [GitHub repository](#link-to-repo).
2. **Bug Reports**: Found a bug? Let us know by submitting an issue, and include as much detail as possible.
3. **Pull Requests**: Want to contribute code? Fork the repository and submit a pull request. We're happy to review and collaborate!
4. **Frameworks & Components**: If you'd like to add support for more UI frameworks or improve NLP-based component matching, we encourage you to contribute.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature`.
5. Open a pull request on GitHub.

### Issues and Discussions

- If you encounter any issues or have questions, feel free to open an issue in our [GitHub Issues](#link-to-issues).
- We're open to suggestions for **new features**, **enhancements**, or **improvements** to existing functionality.

## License

**ai-thing** is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.

---

By collaborating on this project, we can make **ai-thing** even more powerful and versatile. Happy coding!

---

### Summary of Changes

- **Dynamic Framework Support**: Now supports multiple UI frameworks like MUI, Bootstrap, and more.
- **NLP-Driven Component Generation**: Uses NLP to infer component type and properties.
- **Contributions Welcome**: Open to community suggestions, pull requests, and issues.