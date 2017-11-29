import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { getRepository } from 'typeorm';

import { Activity } from '../../entities/activity.entity';
import { Result } from '../../entities/result.entity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private done: boolean = false;

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.runDemo();
  }

  async runDemo() {
    let result1 = new Result();
    result1.id = '1';
    result1.name = 'Result 1';
    result1.value = 'Value 1';

    let result2 = new Result();
    result2.id = '2';
    result2.name = 'Result 2';
    result2.value = 'Value 2';

    let activity = new Activity();
    activity.id = '1';
    activity.name = 'Activity 1';
    activity.results = [result1, result2];

    await getRepository(Activity).save(activity);
    this.done = true;

    let loadedActity = await getRepository(Activity).createQueryBuilder("activity").leftJoinAndSelect("activity.results", "result").getOne();
    console.log(loadedActity);
    console.log(loadedActity.results);
  }
}
