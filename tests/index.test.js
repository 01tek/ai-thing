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
});
