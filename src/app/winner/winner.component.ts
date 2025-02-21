import { Component, OnInit } from '@angular/core';
interface Player {
  username: string;
  points: number;
  ranking: number;
  avatar: string;
}

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  topPlayers: Player[] = [
    { username: 'Javed', points: 8, ranking: 1, avatar: 'assets/avatar.svg' },
    { username: 'Satish', points: 6, ranking: 2, avatar: 'assets/avatar2.svg' },
    { username: 'Mahesh', points: 2, ranking: 3, avatar: 'assets/avatar3.svg' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
