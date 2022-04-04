// Button.stories.js|jsx

import React from 'react';
import { ScoringComponent } from '../scoring/ScoringComponent';
import { criteria as emptyCriteria } from './example-data/empty';
import { criteria as emptyAspectsCriteria } from './example-data/empty-aspects';
import { criteria as emptyTasksCriteria } from './example-data/empty-tasks';
import { criteria as theExampleCriteria } from './example-data/the-example';

export default {
  title: 'ScoringComponent',
  component: ScoringComponent,
  argTypes: { 
    onSubmit: {
      action: 'submit' 
    },
    onCancel: { 
      action: 'cancel' 
    },
  },
};

const Template = (args) => <ScoringComponent {...args} />;

export const TotalEmpty = Template.bind({});
TotalEmpty.args = { 
  criteria: emptyCriteria
};

export const EmptyTasks = Template.bind({});
EmptyTasks.args = { 
  criteria: emptyTasksCriteria
};

export const EmptyAspects = Template.bind({});
EmptyAspects.args = { 
  criteria: emptyAspectsCriteria
};

export const TheExample = Template.bind({});
TheExample.args = { 
  criteria: theExampleCriteria
};
