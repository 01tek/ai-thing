// index.js
import { parseDescription } from './logic/nlpParser';
import { getComponent } from './logic/componentMapper';

const ai = {
    gen: async (strings) => {
        const description = strings.join(' ');
        const componentType = parseDescription(description);

        // Since getComponent is async, we need to await the result
        const Component = await getComponent(componentType);

        return Component;
    },

    configureFramework: (framework) => {
        setFramework(framework);
    }
};

export default ai;
