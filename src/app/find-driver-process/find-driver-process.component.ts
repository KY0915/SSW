import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import * as mockData from '../../assets/mockData/mockData.json';
import { LabelType, Options } from 'ng5-slider';
import * as out from '../../assets/mockData/out.json';

@Component({
  selector: 'app-find-driver-process',
  templateUrl: './find-driver-process.component.html',
  styleUrls: ['./find-driver-process.component.scss'],
})
export class FindDriverProcessComponent implements OnInit {
  @ViewChild('choice1', { static: true })
  choice1: ElementRef;
  @ViewChild('choice2', { static: true })
  choice2: ElementRef;
  @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  @ViewChild('one', { read: ElementRef, static: true })
  public one: ElementRef<any>;
  @ViewChild('two', { read: ElementRef, static: true })
  public two: ElementRef<any>;
  @ViewChild('three', { read: ElementRef, static: true })
  public three: ElementRef<any>;
  @ViewChild('four', { read: ElementRef, static: true })
  public four: ElementRef<any>;
  @ViewChild('five', { read: ElementRef, static: true })
  public five: ElementRef<any>;
  @ViewChild('six', { read: ElementRef, static: true })
  public six: ElementRef<any>;
  @ViewChild('seven', { read: ElementRef, static: true })
  public seven: ElementRef<any>;
  @ViewChild('result', { read: ElementRef, static: true })
  public result: ElementRef<any>;
  minValue: number = 300000;
  maxValue: number = 700000;
  options: Options = {
    floor: 0,
    ceil: 1250000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<p class="choice-block-no-background" >' + value + '</p>';
        case LabelType.High:
          return '<p class="choice-block-no-background" >' + value + '</p>';
        default:
          return '$' + value;
      }
    },
    getSelectionBarColor: (value: number): string => {
      return '#a38fff';
    },
    getPointerColor: (value: number): string => {
      return '#4a34b6';
    },
  };
  userForm: FormGroup;
  activeStep = 0;
  currentChoice = 'handicap';
  constructor(private renderer: Renderer2, private fb: FormBuilder) {}
  showResults = [];
  subQClicked = false;
  questionsList = [
    'Q1. 당신의 스코어는?',
    'Q2. 당신의 드라이버 비거리는?',
    'Q3. 드라이버의 탄도는 어떠신가요?',
    'Q4. 공의 구질은 어떻게 되시나요?',
    'Q5. 평상시의 타구 정확도는?',
    'Q6. 원하시는 가격대는?',
    'Q7. 원하시는 포인트를 체크하세요',
  ];

  userInput = {};
  usersPreference = {
    gender: 'male',
    hand: 'right',
    handicap: 10,
    score: '100',
    driverDistance: 220,
    trajectory: 'low',
    accuracy: 'normal',
    price: '100',
  };

  ngOnInit(): void {
    this.one.nativeElement.scrollIntoView({ behavior: 'smooth' });

    console.log(mockData);
    let i = 10;
    if (i > 7 && i < 15) {
      console.log('p');
    }

    this.userForm = this.fb.group({
      handicap: [100],
      score: [100],
      distance: [200],
      trajectory: [''],
      accuracy: [''],
      CG2: [''],
    });

    this.findMatchingDriver(this.usersPreference);
  }
  scrollLeft(e) {
    this.activeStep -= 1;
    if (this.activeStep === 0) {
      this.one.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 1) {
      this.two.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 2) {
      this.three.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 3) {
      this.four.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 4) {
      this.five.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 5) {
      this.six.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 6) {
      this.seven.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  compare(obj1, obj2) {
    let obj = {};
    for (let k in obj1) {
      if (obj1[k] !== obj2[k]) {
        obj = Object.assign({}, obj1, (obj1[k] = obj2[k]));
      }
    }
    return obj;
  }
  scroll() {
    console.log(this.userForm);
    console.log(this.userForm.value);

    this.usersPreference['handicap'] = this.userForm.get('handicap').value;
    this.usersPreference['score'] = this.userForm.get('score').value as string;
    this.usersPreference['driverDistance'] = this.userForm.get(
      'distance'
    ).value;
    this.usersPreference['trajectory'] = this.userForm.get('trajectory').value;
    this.usersPreference['accuracy'] = this.userForm.get('accuracy').value;

    this.activeStep += 1;
    if (this.activeStep === 1) {
      this.two.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 2) {
      this.three.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 3) {
      this.four.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 4) {
      this.five.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 5) {
      this.six.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 6) {
      this.seven.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.activeStep === 7) {
      this.result.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  userDriverPreference = {
    headSize: 0,
    CG: '',
    CG2: '',
    loft: 0,
    kickpoint: '',
    shaft: '',
    torque: '',
    shaftWeight: '',
  };

  calcWithHandicap(usersPreference) {
    switch (true) {
      case usersPreference.handicap < 82:
        this.userDriverPreference.headSize += 1;
        break;
      case usersPreference.handicap >= 83 && usersPreference < 97:
        this.userDriverPreference.headSize += 2;
        break;
      default:
        this.userDriverPreference.headSize += 3;

        break;
    }
  }

  calcWithAccuracy(usersPreference) {
    switch (true) {
      case usersPreference.accuracy === 'inaccurate':
        this.userDriverPreference.headSize += 1;
        break;
      case usersPreference.accuracy === 'normal':
        this.userDriverPreference.headSize += 2;
        break;
      default:
        this.userDriverPreference.headSize += 3;
        break;
    }
  }
  calcWithDistance(usersPreference) {
    switch (true) {
      case usersPreference.driverDistance <= 199:
        this.userDriverPreference.loft += 8;
        break;
      case usersPreference.driverDistance >= 200 &&
        usersPreference.driverDistance < 250:
        this.userDriverPreference.loft += 10;
        break;
      default:
        this.userDriverPreference.loft += 12;
        break;
    }

    switch (true) {
      case usersPreference.driverDistance < 199:
        this.userDriverPreference.shaft += 'X TS SX S';
        break;
      case usersPreference.driverDistance >= 200 &&
        usersPreference.driverDistance < 250:
        this.userDriverPreference.shaft += 'SR R R1 R2';
        break;
      default:
        this.userDriverPreference.shaft += 'A R3 L L2';
        break;
    }

    switch (true) {
      case usersPreference.driverDistance <= 199:
        this.userDriverPreference.torque = 'high';
        break;
      case usersPreference.driverDistance >= 200 &&
        usersPreference.driverDistance < 250:
        this.userDriverPreference.torque = 'middle';
        break;
      default:
        this.userDriverPreference.torque = 'low';
        break;
    }

    switch (true) {
      case usersPreference.driverDistance <= 199:
        this.userDriverPreference.shaftWeight = '50';
        break;
      case usersPreference.driverDistance >= 200 &&
        usersPreference.driverDistance < 250:
        this.userDriverPreference.shaftWeight = '65';
        break;
      default:
        this.userDriverPreference.shaftWeight = '72.5';
        break;
    }
  }
  calcWithTrajectory(usersPreference) {
    switch (true) {
      case usersPreference.trajectory === 'low' ||
        usersPreference.trajectory === 'very low':
        this.userDriverPreference.CG = 'back';
        break;
      case usersPreference.trajectory === 'middle':
        this.userDriverPreference.CG = 'middle';
        break;
      default:
        this.userDriverPreference.CG = 'front';
        break;
    }

    switch (true) {
      case usersPreference.trajectory === 'low' ||
        usersPreference.trajectory === 'very low':
        this.userDriverPreference.loft += 12;
        break;
      case usersPreference.trajectory === 'middle':
        this.userDriverPreference.loft += 10;
        break;
      default:
        this.userDriverPreference.loft += 8;
        break;
    }

    switch (true) {
      case usersPreference.trajectory === 'low' ||
        usersPreference.trajectory === 'very low':
        this.userDriverPreference.kickpoint += 'low low-mid';
        break;
      case usersPreference.trajectory === 'middle':
        this.userDriverPreference.kickpoint += 'low low-mid mid mid-high';
        break;
      default:
        this.userDriverPreference.kickpoint += 'mid-high high';
        break;
    }
  }
  findMatchingDriver(usersPreference) {
    this.calcWithTrajectory(usersPreference);
    this.calcWithDistance(usersPreference);
    this.calcWithAccuracy(usersPreference);
    this.calcWithHandicap(usersPreference);
    console.log(this.userDriverPreference);
    let x = (out as any).default;
    console.log(x);
    const mapped = Object.keys(x).map((key) => ({
      value: x[key],
    }));
    let temp;
    let shaftFiltered = mapped.filter((v) => {
      return this.userDriverPreference.shaft.split(' ').find((keys) => {
        return v.value.Flex.toLocaleLowerCase() === keys.toLocaleLowerCase();
      });
    });

    let kickpointFiltered = shaftFiltered.filter((v, index, array) => {
      return this.userDriverPreference.kickpoint.split(' ').find((keys) => {
        return (
          v.value.Kickpoint.toLocaleLowerCase() === keys.toLocaleLowerCase()
        );
      });
    });

    let headSizeFiltered = kickpointFiltered.filter((v) => {
      if (this.userDriverPreference.headSize < 3) {
        return Number(v.value['Head Size']) <= 440;
      } else if (
        this.userDriverPreference.headSize >= 3 &&
        this.userDriverPreference.headSize < 5
      ) {
        return (
          Number(v.value['Head Size']) > 440 &&
          Number(v.value['Head Size']) < 460
        );
      } else {
        return Number(v.value['Head Size']) >= 460;
      }
    });

    let loftFiltered = headSizeFiltered.filter((v) => {
      if (this.userDriverPreference.loft > 20) {
        return Number(v.value['Loft']) >= 12;
      } else if (
        this.userDriverPreference.loft <= 20 &&
        this.userDriverPreference.loft > 18
      ) {
        return Number(v.value['Loft']) <= 10 && Number(v.value['Loft']) >= 11;
      } else {
        return Number(v.value['Loft']) <= 10;
      }
    });

    if (loftFiltered.length === 0) loftFiltered = headSizeFiltered;

    this.showResults = loftFiltered.slice(0, 10);
    console.log(loftFiltered);
  }

  clickSubQuestion(el) {
    if (el.innerText === '핸디') {
      this.renderer.addClass(el, 'clicked');
      this.currentChoice = 'handicap';
      this.userInput[''];
      this.choice2.nativeElement.classList.remove('clicked');
    } else {
      this.renderer.addClass(el, 'clicked');
      this.currentChoice = 'score';
      this.choice1.nativeElement.classList.remove('clicked');
    }
  }

  handicapAdd(handicap) {
    console.log(handicap);
    this.userForm
      .get(handicap)
      .patchValue(Number(this.userForm.get(handicap).value) + 1);
  }

  handicapSubtract(handicap) {
    this.userForm
      .get(handicap)
      .patchValue(Number(this.userForm.get(handicap).value) - 1);
  }
}
