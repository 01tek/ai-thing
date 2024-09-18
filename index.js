// index.js
import { parseDescription } from './logic/nlpParser';
import { getComponent } from './logic/componentMapper';

let framework = 'mui';

// Set the framework
const setFramework = (newFramework) => {
    framework = newFramework;
};

// Get the framework
const getFramework = () => {
    return framework;
};

const ai = {
    gen: async (strings) => {
        const description = strings.join(' ');
        const componentType = parseDescription(description);

        const Component = await getComponent(componentType, getFramework());

        return Component;
    },
    configureFramework: (newFramework) => {
        setFramework(newFramework);
    }
};

export default ai;
