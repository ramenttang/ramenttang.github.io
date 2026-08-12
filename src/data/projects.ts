export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: 'UI/UX' | '3D' | 'Visual';
  year: string;
  tools: string[];
  summary: string;
  detail?: string;
  cover: string;
  images: string[];
  featured?: boolean;
  contain?: boolean;
  period?: string;
  role?: string;
  overview?: string;
  sections?: { title: string; body: string; items?: string[] }[];
};

const asset = (folder: string, file: string) => `/assets/${folder}/${file}`;

export const projects: Project[] = [
  {
    id: 'checkpass', title: 'CHECKPASS', subtitle: 'Beacon Attendance Experience', category: 'UI/UX', year: '2023',
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    summary: '블루투스 Beacon 기술을 매일 쓰는 직관적인 출결 경험으로 바꾼 웹·iOS 애플리케이션.',
    detail: '로고와 컬러 시스템부터 웹·모바일 전체 화면까지 UI/UX 기획과 디자인을 전담했습니다. 기술은 보이지 않게, 출결 상태는 명확하게 전달하는 정보 위계에 집중했습니다.',
    cover: asset('01-checkpass', 'slide06-image50.png'),
    images: ['slide06-image45.png','slide06-image46.png','slide06-image50.png','slide07-image51.png','slide07-image52.png','slide07-image53.png','slide07-image54.png','slide07-image55.png','slide07-image56.png','slide07-image57.png','slide07-image58.png','slide07-image59.png'].map(x => asset('01-checkpass', x)), featured: true,
    period: '2023.09.01 – 2023.11.30', role: 'UI/UX 기획 및 디자인',
    overview: '학생들이 매일 사용하는 출결 과정을 더 간편하게 만들기 위해 Bluetooth Beacon을 활용한 웹·iOS 애플리케이션을 설계했습니다. 서비스 로고와 폰트 선정부터 컬러 시스템, 전체 UI/UX 화면 구성을 전담했습니다.',
    sections: [
      { title: '주요 작업', body: '서비스의 첫인상부터 실제 사용 화면까지 하나의 시각 시스템으로 연결했습니다.', items: ['서비스 정체성을 담은 CHECKPASS 로고 디자인', '컬러 코드 지정 및 디자인 가이드라인 수립', '웹과 iOS 앱 전반의 화면 구성', '실제 디바이스 구동 환경에서 화면 검토'] },
      { title: '디자인 방향', body: '학생들이 매일 마주하는 서비스인 만큼 직관적인 동선과 명확한 정보 위계에 집중했습니다. Beacon 자동 출결이라는 기술적 개념을 사용자가 체감하지 못하도록 UI로 완충하고, 로고·컬러·타이포그래피를 하나의 시스템으로 묶어 앱 전반의 일관성을 유지했습니다.' },
    ],
  },
  {
    id: 'simspace', title: 'SIMSPACE', subtitle: 'Visual Asset Renewal', category: 'Visual', year: '2026',
    tools: ['Generative AI', 'Photoshop'],
    summary: 'AI 생성과 정교한 리터칭을 연결해 글로벌 에듀테크 서비스의 감정·취미·일상 에셋을 구축.',
    detail: '캐릭터 일관성을 유지하는 프롬프트 기준을 만들고, Photoshop으로 형태 오류와 디테일을 보정했습니다. 글로벌 사용자를 위한 이모티콘 3종과 다이어리 스티커 7종을 기획·제작했습니다.',
    cover: asset('08-simspace-renewal', 'slide15-image87.png'),
    images: ['slide15-image90.png','slide15-image87.png','slide15-image88.png','slide15-image89.png','slide16-image91.png','slide16-image92.png','slide16-image93.png','slide16-image94.png','slide16-image95.png','slide16-image96.png','slide16-image97.png'].map(x => asset('08-simspace-renewal', x)), featured: true, contain: true,
    role: '신규 이모티콘 · 스티커 · 테마 기획 및 디자인',
    overview: '리뉴얼된 심스페이스 플랫폼의 비주얼 아이덴티티에 맞춰 캐릭터 이모티콘, 다이어리 꾸미기 스티커, 테마 등 신규 비주얼 에셋을 기획·디자인했습니다. 순수 생성 결과물을 사용하지 않고 AI로 후보를 확보한 뒤 Photoshop으로 서비스 환경에 맞게 마감했습니다.',
    sections: [
      { title: '작업 과정', body: '생성부터 서비스 적용까지 일관된 제작 기준을 세웠습니다.', items: ['플랫폼의 톤앤매너 분석과 일관된 스타일을 위한 프롬프트 설계', '다수의 원본 이미지 생성 후 콘셉트에 맞는 시안 선별', '형태 오류 수정, 색조 보정, 외곽선 정리 등 디테일 리터칭', 'UI와 디바이스 해상도에 맞춘 배경 투명화 및 리사이징'] },
      { title: '이모티콘 3종', body: '메인 캐릭터 ‘심스’를 활용한 감정·취미·운동 패키지를 전담 제작했습니다. 가장 큰 과제였던 캐릭터 일관성을 위해 반복적인 프롬프트 실험으로 톤앤매너를 통제하고, AI 특유의 형태 오류를 픽셀 단위로 보정했습니다.' },
      { title: '스티커 7종', body: '신규 ‘다이어리 꾸미기’ 기능을 위한 학교·날씨·일상·활동·글리터·표정 이모지·도형 스티커를 제작했습니다. 메뉴얼이 없는 상황에서 오프라인 시장을 벤치마킹해 자체 가이드라인을 세우고, 로컬 요소와 논란의 여지가 있는 요소를 배제해 전 세계 학생이 활용할 수 있는 보편적인 오브젝트를 선정했습니다.' },
    ],
  },
  {
    id: 'subculture', title: 'ALTER EGO', subtitle: 'Subculture Character Study', category: '3D', year: '2025',
    tools: ['Blender'], summary: '스타일라이즈드 비율과 표정, 캐릭터의 실루엣을 탐구한 서브컬쳐풍 모델링.',
    cover: asset('04-3d-modeling-subculture', 'slide10-image74.png'), images: Array.from({length: 6}, (_, i) => asset('04-3d-modeling-subculture', `slide10-image${74+i}.png`)), featured: true,
  },
  {
    id: 'lighting-one', title: 'TWO LIGHTS', subtitle: 'Natural / Moonlight', category: '3D', year: '2024',
    tools: ['Lighting', 'Rendering'], summary: '같은 공간, 다른 빛. 자연광과 푸른 달빛이 공간의 정서를 바꾸는 방식에 대한 연구.',
    cover: asset('05-lighting-rendering-1', 'slide11-image80.png'), images: [80,81].map(n => asset('05-lighting-rendering-1', `slide11-image${n}.png`)), featured: true,
  },
  {
    id: 'modeling-maya', title: 'FORM STUDIES', subtitle: 'Maya Modeling Collection', category: '3D', year: '2024',
    tools: ['Maya'], summary: '캐릭터와 소품의 형태, 실루엣, 폴리곤 구조를 탐구한 모델링 컬렉션.',
    cover: asset('02-3d-modeling-maya', 'slide08-image61.png'), images: Array.from({length: 8}, (_, i) => asset('02-3d-modeling-maya', `slide08-image${60+i}.png`)), contain: true,
  },
  {
    id: 'modeling-multi', title: 'CROSS DCC', subtitle: 'Character / Environment', category: '3D', year: '2024',
    tools: ['Maya', 'ZBrush', 'Blender'], summary: '하드서페이스와 오가닉 오브젝트를 각 도구의 강점에 맞춰 연결한 다중 DCC 작업.',
    cover: asset('03-3d-modeling-multi', 'slide09-image68.png'), images: Array.from({length: 6}, (_, i) => asset('03-3d-modeling-multi', `slide09-image${68+i}.png`)),
  },
  {
    id: 'lighting-two', title: 'LUMINOUS SCENES', subtitle: 'Product / Environment', category: '3D', year: '2024',
    tools: ['Lighting', 'Rendering'], summary: '재료의 물성과 장소의 내러티브를 빛으로 드러낸 프로덕트·환경 라이팅.',
    cover: asset('06-lighting-rendering-2', 'slide12-image83.png'), images: [82,83,84].map(n => asset('06-lighting-rendering-2', `slide12-image${n}.png`)),
  },
  {
    id: 'compositing', title: 'BUTTERFLY VALLEY', subtitle: 'Atmospheric Compositing', category: 'Visual', year: '2024',
    tools: ['Nuke'], summary: '산맥의 레이어, 대기 원근, 거대한 나비 실루엣을 하나의 장면으로 합성.',
    cover: asset('07-compositing', 'slide13-image85.png'), images: [85,86].map(n => asset('07-compositing', `slide13-image${n}.png`)),
  },
  {
    id: 'template', title: 'BEARLY SERIOUS', subtitle: 'Character Template System', category: 'Visual', year: '2023',
    tools: ['PowerPoint', 'Graphic Design'], summary: '캐릭터의 유머와 사용성을 일관된 레이아웃에 담아 배포한 프레젠테이션 템플릿.',
    cover: asset('09-template-design', 'slide17-image98.png'), images: Array.from({length: 9}, (_, i) => asset('09-template-design', `slide17-image${98+i}.png`)),
  },
  {
    id: 'ai-image', title: 'PROMPTED WORLDS', subtitle: 'Text-to-Image Experiments', category: 'Visual', year: '2026',
    tools: ['ComfyUI', 'Z-Image-Turbo'], summary: '텍스트 프롬프트만으로 스타일과 장면을 통제하는 생성형 이미지 실험.',
    cover: asset('10-ai-image', 'slide18-image113.png'), images: Array.from({length: 8}, (_, i) => asset('10-ai-image', `slide18-image${107+i}.png`)),
  },
];
