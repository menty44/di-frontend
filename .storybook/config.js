import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index');
  require('../src/stories/name');
}

configure(loadStories, module);
