import nlp from 'compromise';
import { componentsList } from './componentList';

// Helper to capitalize first letter of each word (for matching component names)
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Infer Component Type by matching the description with available components
export const inferComponentType = (description) => {
    const doc = nlp(description);

    // Search through the list of components and see if any match the description
    for (const component of componentsList) {
        if (doc.has(component.toLowerCase())) {
            return component;
        }
    }

    // Fallback to a default type if no component matches
    return 'div'; // Default fallback
};

// Mapping for potential properties (color, size, etc.)
const propMappings = {
    color: {
        blue: 'primary',
        red: 'secondary',
        green: 'success',
        yellow: 'warning',
    },
    size: {
        small: 'small',
        large: 'large',
        medium: 'medium',
    }
};

// Infer component props from description
export const inferProps = (description) => {
    const doc = nlp(description);
    const props = {};

    // Infer color prop
    if (doc.has('blue') || doc.has('red') || doc.has('green') || doc.has('yellow')) {
        const color = doc.match('blue|red|green|yellow').text();
        props.color = propMappings.color[color] || color;
    }

    // Infer size prop
    if (doc.has('small') || doc.has('large') || doc.has('medium')) {
        const size = doc.match('small|large|medium').text();
        props.size = propMappings.size[size] || size;
    }

    // Infer other props like variant, layout direction, etc.
    if (doc.has('outlined')) {
        props.variant = 'outlined';
    }

    if (doc.has('row') || doc.has('column')) {
        props.direction = doc.has('row') ? 'row' : 'column';
    }

    return props;
};

// Main function to parse the description and infer component type and props
export const parseDescription = (description) => {
    const type = inferComponentType(description);
    const props = inferProps(description);

    return { type, props };
};
