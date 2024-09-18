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
    },
    resetFramework: () => {
        framework = 'mui';
    },
    getComponentType: async (description) => {
        return parseDescription(description);
    },
    getComponent: async (componentType) => {
        return getComponent(componentType, getFramework());
    },
    getFramework: () => {
        return getFramework();
    },
    getFrameworks: () => {
        return ['mui', 'bootstrap', 'ant-design', 'chakra', 'semantic-ui', 'materialize', 'tailwind', 'grommet', 'evergreen', 'rebass', 'baseui', 'carbon', 'fluentui', 'elasticui', 'blueprint', 'gestalt', 'reakit', 'rimble', 'theme-ui', 'vuetify', 'quasar', 'buefy', 'element', 'vue-material', 'vuesax'];
    }
};

export default ai;
