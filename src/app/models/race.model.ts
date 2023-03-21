import { Feature } from 'src/app/models/feature.model';
import { SubRace } from 'src/app/models/sub-race.model';

export class Race {
  id: string = '';
  name: string = '';
  description: string = '';
  size: string = '';
  type: string = '';
  speed: string = '';
  flySpeed: string = '';
  swimSpeed: string = '';
  Features: Feature[] = [];
  SubRaces: SubRace[] = [];
}
