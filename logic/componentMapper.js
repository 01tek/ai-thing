import { runComponentCommand } from './helpers/shadcn'

// Function to dynamically import components based on the current framework
export const getComponent = async (type, framework) => {
  try {
    switch (framework) {
      case 'mui':
        return await import(`@mui/material/${type}`).then(mod => mod.default);
      case 'bootstrap':
        return await import(`react-bootstrap/${type}`).then(mod => mod.default);
      case 'ant-design':
        return await import(`antd/es/${type}`).then(mod => mod.default);
      case 'chakra':
        return await import(`@chakra-ui/react/${type}`).then(mod => mod[type]);
      case 'semantic-ui':
        return await import(`semantic-ui-react/dist/commonjs/${type}`).then(mod => mod[type]);
      case 'materialize':
        return await import(`materialize-css/${type}`).then(mod => mod.default);
      case 'tailwind':
        return await import(`@headlessui/react/${type}`).then(mod => mod[type]);
      case 'grommet':
        return await import(`grommet/${type}`).then(mod => mod.default);
      case 'evergreen':
        return await import(`evergreen-ui/${type}`).then(mod => mod.default);
      case 'rebass':
        return await import(`rebass/styled-components/${type}`).then(mod => mod.default);
      case 'baseui':
        return await import(`baseui/${type}`).then(mod => mod.default);
      case 'carbon':
        return await import(`carbon-components-react/${type}`).then(mod => mod.default);
      case 'fluentui':
        return await import(`@fluentui/react/${type}`).then(mod => mod.default);
      case 'elasticui':
        return await import(`@elastic/eui/lib/components/${type}`).then(mod => mod.default);
      case 'blueprint':
        return await import(`@blueprintjs/core/lib/esm/components/${type}`).then(mod => mod[type]);
      case 'gestalt':
        return await import(`gestalt/${type}`).then(mod => mod[type]);
      case 'reakit':
        return await import(`reakit/${type}`).then(mod => mod[type]);
      case 'rimble':
        return await import(`rimble-ui/${type}`).then(mod => mod.default);
      case 'theme-ui':
        return await import(`theme-ui/${type}`).then(mod => mod.default);
      case 'vuetify':
        return await import(`vuetify/lib/components/${type}`).then(mod => mod.default);
      case 'quasar':
        return await import(`quasar/dist/${type}`).then(mod => mod.default);
      case 'buefy':
        return await import(`buefy/dist/components/${type}`).then(mod => mod.default);
      case 'element':
        return await import(`element-plus/lib/${type}`).then(mod => mod.default);
      case 'vue-material':
        return await import(`vue-material/dist/components/${type}`).then(mod => mod.default);
      case 'vuesax':
        return await import(`vuesax/dist/${type}`).then(mod => mod.default);
      case 'vuetify':
        return await import(`vuetify/lib/components/${type}`).then(mod => mod.default);
      case 'quasar':
        return await import(`quasar/dist/${type}`).then(mod => mod.default);
      case 'buefy':
        return await import(`buefy/dist/components/${type}`).then(mod => mod.default);
      case 'element':
        return await import(`element-plus/lib/${type}`).then(mod => mod.default);
      case 'shadcn-ui': {
        // installing component via cli
        await new Promise((resolve, reject) => {
          runComponentCommand(type);
          resolve();
        });

        return await import(`@/components/ui/${type}`).then(mod => mod.default);
      }
      default:
        throw new Error(`Unknown framework: ${framework}`);
    }
  } catch (error) {
    console.error(`Error loading component ${type} from ${framework}:`, error);
    return () => <div>Component not found</div>; // Fallback component
  }
};

