import { parseDescription } from '../logic/nlpParser';

describe('NLP Parser', () => {
  test('parses description into button component and props', () => {
    const result = parseDescription('A large blue button labeled "Submit"');

    expect(result.type).toBe('Button');
    expect(result.props.color).toBe('primary');
    expect(result.props.size).toBe('large');
    expect(result.props.label).toBe('Submit');
  });

  test('parses description into select component', () => {
    const result = parseDescription('A dropdown menu with three options.');

    expect(result.type).toBe('Select');
    expect(result.props.options.length).toBe(3);
  });

  test('parses description into input component', () => {
    const result = parseDescription('A text input field for entering email.');

    expect(result.type).toBe('Input');
    expect(result.props.type).toBe('email');
    expect(result.props.placeholder).toBe('Enter your email');
  });

  test('parses description with fallback to div when no match', () => {
    const result = parseDescription('A cool random component.');

    expect(result.type).toBe('div');
  });

  test('parses description into checkbox component', () => {
    const result = parseDescription('A checkbox labeled "Agree to terms".');

    expect(result.type).toBe('Checkbox');
    expect(result.props.label).toBe('Agree to terms');
  });

  test('parses description into radio group component', () => {
    const result = parseDescription('A radio group with three options: "Option 1", "Option 2", "Option 3".');

    expect(result.type).toBe('RadioGroup');
    expect(result.props.options).toEqual(['Option 1', 'Option 2', 'Option 3']);
  });
});
