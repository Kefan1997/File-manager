import Conf from 'conf';

const schema = {
  username: {
    type: 'string',
    default: 'guest',
  },
};

const config = new Conf({
  projectName: 'File-manager',
  configName: 'config-file-manager',
  schema,
});

export default config;
