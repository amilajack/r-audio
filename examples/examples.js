import React from 'react';

import AudioWorkletExample from './audio-worklet.js';
import DelayLineExample from './delay-lines.js';
import ComplexGraph from './complex-effects-graph.js';
import BuffersAndChannels from './buffers-channels.js';
import MediaElementSourceExample from './media-element.js';
import MediaStreamSourceExample from './media-stream.js';
import Mutation from './mutation.js';
import GainMatrix from './gain-matrix.js';

const examples = {
  'audio-worklet': <AudioWorkletExample/>,
  'delay-lines-scheduling': <DelayLineExample />,
  'complex-effects-graph': <ComplexGraph/>,
  'buffers-channels': <BuffersAndChannels/>,
  'media-element': <MediaElementSourceExample/>,
  'media-stream': <MediaStreamSourceExample/>,
  'mutation': <Mutation/>,
  'gain-matrix': <GainMatrix/>
};

export default examples;
