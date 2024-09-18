// test/index.test.js
import aiThing from '../index';

describe('AI Thing', () => {
    test('generates a button component with props', async () => {
        aiThing.configureFramework('mui');
        const GeneratedButton = await aiThing.gen('A small red button labeled "Cancel"');

        // Ensure a valid component is generated
        expect(GeneratedButton).toBeInstanceOf(Function);

        // Test rendering the button with additional props
        const element = GeneratedButton({ disabled: true });
        expect(element.props.color).toBe('secondary');
        expect(element.props.size).toBe('small');
        expect(element.props.disabled).toBe(true);
    });

    test('handles missing components gracefully', async () => {
        aiThing.configureFramework('mui');
        const GeneratedComponent = await aiThing.gen('A cool new component that does not exist');
        expect(GeneratedComponent).toBeNull();
    });

    test('changes the framework', () => {
        aiThing.configureFramework('bootstrap');
        expect(aiThing.getFramework()).toBe('bootstrap');
    });

    test('resets the framework', () => {
        aiThing.configureFramework('mui');
        aiThing.resetFramework();
        expect(aiThing.getFramework()).toBe('mui');
    });

    test('gets the component type', async () => {
        aiThing.configureFramework('mui');
        const componentType = await aiThing.getComponentType('A large blue button labeled "Submit"');
        expect(componentType).toBe('Button');
    });

    test('gets the component', async () => {
        aiThing.configureFramework('mui');
        const Component = await aiThing.getComponent('Button');
        expect(Component).toBeInstanceOf(Function);
    });

    test('gets the framework', () => {
        aiThing.configureFramework('mui');
        expect(aiThing.getFramework()).toBe('mui');
    });

    test('gets the list of frameworks', () => {
        const frameworks = aiThing.getFrameworks();
        expect(frameworks).toEqual([
            'mui', 'bootstrap', 'ant-design', 'chakra', 'semantic-ui', 'materialize', 'tailwind', 'grommet', 'evergreen', 'rebass', 'baseui', 'carbon', 'fluentui', 'elasticui', 'blueprint', 'gestalt', 'reakit', 'rimble', 'theme-ui', 'vuetify', 'quasar', 'buefy', 'element', 'vue-material', 'vuesax'
        ]);
    });

    test('generates a select component', async () => {
        aiThing.configureFramework('mui');
        const GeneratedSelect = await aiThing.gen('A dropdown menu with three options.');

        // Ensure a valid component is generated
        expect(GeneratedSelect).toBeInstanceOf(Function);
    });
});
