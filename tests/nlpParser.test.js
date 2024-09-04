// test/nlpParser.test.js
import { parseDescription } from '../logic/nlpParser';

describe('NLP Parser', () => {
    test('parses description into button component and props', () => {
        const result = parseDescription('A large blue button labeled "Submit"');

        expect(result.type).toBe('Button');
        expect(result.props.color).toBe('primary');
        expect(result.props.size).toBe('large');
    });

    test('parses description into select component', () => {
        const result = parseDescription('A dropdown menu with three options.');

        expect(result.type).toBe('Select');
    });

    test('parses description with fallback to div when no match', () => {
        const result = parseDescription('A cool random component.');

        expect(result.type).toBe('div');
    });
});
