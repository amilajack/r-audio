import React from 'react';

import AudioWorkletExample from './audio-worklet.jsx';
import delays from './delay-lines.jsx';
import ComplexGraph from './complex-effects-graph.jsx';
import BuffersAndChannels from './buffers-channels.jsx';
import MediaElementSourceExample from './media-element.jsx';
import MediaStreamSourceExample from './media-stream.jsx';
import Mutation from './mutation.jsx';

const examples = {
  'audio-worklet': <AudioWorkletExample/>,
  'delay-lines': delays,
  'complex-effects-graph': <ComplexGraph/>,
  'buffers-channels': <BuffersAndChannels/>,
  'media-element': <MediaElementSourceExample/>,
  'media-stream': <MediaStreamSourceExample/>,
  'mutation': <Mutation/>
}

export default examples;