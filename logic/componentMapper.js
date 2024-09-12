// logic/componentMapper.js
import { getFramework } from './config';
import { runComponentCommand } from './helpers/shadcn'

// Function to dynamically import components based on the current framework
export const getComponent = async (type) => {
  const framework = getFramework();
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

