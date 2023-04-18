
import React from 'react';

const TreeNode = ({ node }) => {

  console.log('node', node);
  return (
    <ul className='tree__node'>
      <li className='tree__item'>
        <p>{node.name}</p>
        <p>{node.descriptions}</p>
        {node.childs && node.childs.map(child => <TreeNode key={child.name} node={child} />)}
      </li>


    </ul>
  );
};

export default TreeNode;