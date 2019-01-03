import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-angular-tree',
  templateUrl: './demo-angular-tree.component.html',
  styleUrls: ['./demo-angular-tree.component.scss']
})
export class DemoAngularTreeComponent implements OnInit {

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub', children: [] },
            { name: 'subsub', children: [] }
          ],
          isExpanded: true
        }
      ],
      isExpanded: true
    }
  ];

  options = {
    allowDrag: true,
    allowDrop: true
  };

  constructor() { }

  ngOnInit() {
  }


  onUpdateData($event) {
    console.log('onUpdateData: ', $event);
    $event.treeModel.expandAll();
  }

  onMoveNode($event) {
    console.log('onMoveNode: ', $event);
  }

}
