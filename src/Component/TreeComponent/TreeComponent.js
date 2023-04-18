import React from 'react';
import TreeNode from './TreeNodeComponent';
import { parents } from '../../data';

const Tree = () => {
  return (
    <div className='tree'>
      {parents.map(parent => <TreeNode key={parent.name} node={parent} />)}
    </div>
  );
};

export default Tree;
