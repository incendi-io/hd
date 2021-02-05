import { Part } from '~types/Part'
import { PartCategory } from '~types/PartCategory'

export const categoriesMock: PartCategory[] = [
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat1.png',
    },
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat2.png',
    },
    children: [
      { id: '1', slug: 'buckets', title: 'Buckets', partsCount: 48 },
      { id: '1', slug: 'buckets', title: 'Bale Grabs', partsCount: 52 },
      { id: '1', slug: 'buckets', title: 'Bale Spears', partsCount: 148 },
    ],
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat3.png',
    },
    children: [
      { id: '1', slug: 'buckets', title: 'Augers', partsCount: 48 },
      { id: '1', slug: 'buckets', title: 'Bale Grabs', partsCount: 52 },
      { id: '1', slug: 'buckets', title: 'Bale Spears', partsCount: 148 },
    ],
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat4.png',
    },
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat5.png',
    },
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat6.png',
    },
  },
  {
    id: '1',
    slug: 'attachments',
    title: 'Attachments',
    partsCount: 2015,
    image: {
      id: '1',
      alt: 'image',
      url: '/images/mock/cat7.png',
    },
  },
]

export const partsListMock: Part[] = [
  {
    id: '009ekrDoVEyNBjOEac7s',
    slug: '/parts/332-4900',
    partName: ' BUCKET GP-AD',
    partNumber: '332-4900',
    brand: 'Cat',
    shortDescription: '1850 mm (73 in) Heavy Duty Bucket for 345-352 Hex (UB-Linkage)',
    longDescription:
      'Heavy Duty buckets are a good all-purpose bucket that work well in a wide range of soil types, making them the ideal choice for general construction applications. Designed to get more from your 345-352 sized excavators, these buckets make digging and bench loading more profitable.',
    category: 'Attachments',
    subCategory: 'Buckets',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/3181996/0.jpg'],
  },
  {
    id: '009vDMe1dNJIrhtmertm',
    slug: '/parts/237-3653',
    partName: ' Type 27 High Performance Zirconium Grinding Wheels',
    partNumber: '237-3653',
    brand: 'Cat',
    shortDescription: '',
    longDescription: '',
    category: 'Shop Supplies',
    subCategory: 'Abrasives',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/18905/0.jpg'],
  },
  {
    id: '00DEmalghGiMYQLYb9D4',
    slug: '/parts/0r-2445',
    partName: ' CYL AS REM',
    partNumber: '0R-2445',
    brand: 'Cat',
    shortDescription: 'Cat® Reman Hydraulic Cylinder Tube with Bearing',
    longDescription:
      '&lt;p&gt;Description:&lt;br/&gt;A hydraulic cylinder tube is a seamless barrel shaped component and houses the rod and piston assemblies of a complete hydraulic cylinder arrangement.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Attributes:&lt;br/&gt;Cat® Hydraulic Cylinder Tubes are manufactured with thick tube walls that enable more service lives. This feature, when combined with exclusive Cat Oversize Seals, can extend cylinder life in many applications. Cat Reman parts provide same-as-new performance and reliability at fraction-of-new costs — while reducing the impact on the environment.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Recommended Application:&lt;br/&gt;Cat® Hydraulic Cylinder Tubes are designed for machine specific applications. &lt;/p&gt;',
    category: 'Hydraulics',
    subCategory: 'Cat® Reman Products',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/327337/0.jpg'],
  },
  {
    id: '00SDncciyblzu2w7OOBo',
    slug: '/parts/0r-4877',
    partName: ' ROD AS HYD',
    partNumber: '0R-4877',
    brand: 'Cat',
    shortDescription: 'Cat® Reman Hydraulic Rod with Eye Bearing',
    longDescription:
      '&lt;p&gt;Description:&lt;br/&gt;A hydraulic rod connects a hydraulic cylinder to the machine component doing the work.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Attributes:&lt;br/&gt;Most Cat® Hydraulic Rods are induction hardened and chromed for superior scratch and dent resistance. Additionally, most Cat® hydraulic rods also feature an inertia welded eye joint for maxmimum durability. Cat Reman parts provide same-as-new performance and reliability at fraction-of-new costs — while reducing the impact on the environment.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Recommended Application:&lt;br/&gt;Cat® Hydraulic Cylinder Rods are designed for specific hydraulic cylinder applications.&lt;/p&gt;',
    category: 'Hydraulics',
    subCategory: 'Cat® Reman Products',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/329827/0.jpg'],
  },
  {
    id: '00X4hluFCmbphbjgor6x',
    slug: '/parts/096-0580',
    partName: ' SUN GEAR',
    partNumber: '096-0580',
    brand: 'Cat',
    shortDescription: 'Cat® Spur Gear',
    longDescription:
      '&lt;p&gt;Description:&lt;br/&gt;A spur gear is the most common type of gear and consists of a cylinder or disk with teeth projected straight outward. A spur gear also generally looks the same from either side, since the teeth are straight from one side to the other. &lt;/p&gt;&lt;br/&gt;&lt;p&gt;Attributes:&lt;br/&gt;Cat gears are machined from carefully selected materials to exacting specifications that match the loads encountered in Cat machines. They are manufactured using special, and in some cases proprietary, heat treat processes — including case carburizing, nitriding, and induction hardening. Cat gears have the industry&amp;_amp;s highest power density, or the amount of power a gear can transmit relative to its size and are designed with reusability in mind. Consequently, they are more durable and keep your overall machine operating costs down. &lt;/p&gt;&lt;br/&gt;&lt;p&gt;Recommended Application:&lt;br/&gt;Cat gears are built specific to their application to ensure all drive train parts work and wear together as a system.&lt;/p&gt;',
    category: 'Drive Train',
    subCategory: 'Gears',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/276015/0.jpg'],
  },
  {
    id: '00ejunPde0QtqaXDMTVW',
    slug: '/parts/140-2386',
    partName: ' Transmission Gasket Kits',
    partNumber: '140-2386',
    brand: 'Cat',
    shortDescription: 'Transmission Gasket Kit - Planetary Group',
    longDescription:
      'Description:&lt;br/&gt;This Transmission Gasket Kit contains all gaskets, seals, and o-rings needed to rebuild the planetary group during a transmission overhaul.&lt;br/&gt;&lt;br/&gt;Attributes:&lt;br/&gt;A Cat®  Transmission Gasket Kit allows you to order a single part number which contains all the components for the application, while incorporating changes for the latest design changes. &lt;br/&gt;&lt;br/&gt;Recommended Application:&lt;br/&gt;All Applications',
    category: 'Drive Train',
    subCategory: 'Transmissions',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/586511/0.jpg'],
  },
  {
    id: '00irLIz18S21IYVqBYiU',
    slug: '/parts/4f-1515',
    partName: ' BEARING',
    partNumber: '4F-1515',
    brand: 'Cat',
    shortDescription: 'Cat® Ball Bearing (Single Row)',
    longDescription:
      '&lt;p&gt;Description:&lt;br/&gt;Ball Bearings reduce friction and provide protection between mating parts. They are specifically designed for high speed, low load applications with little to no side thrust.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Attributes:&lt;br/&gt;Caterpillar spends significant amounts of time and money on research and development to ensure every Cat bearing meets specific design and application requirements. Many incorporate one or more special features not found in industry standard bearings. The net result is a reduction in the number of repairs required, along with reduced downtime and operating costs.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Recommended Application:&lt;br/&gt;Cat bearings are built specific to their application to ensure all drive train parts work and wear together as a system.&lt;/p&gt;',
    category: 'Drive Train',
    subCategory: 'Differentials',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/2543903/0.jpg'],
  },
  {
    id: '00tQMk3j0lCiJ68pE80f',
    slug: '/parts/377-7412',
    partName: ' TURBINE-CONV-YM',
    partNumber: '377-7412',
    brand: 'Yellowmark',
    shortDescription: 'Yellowmark™ Turbine',
    longDescription:
      '&lt;p&gt; Description:&lt;br/&gt;Yellowmark™ parts are mid-tier aftermarket parts for Cat® equipment.&lt;br/&gt;&lt;br/&gt;Attributes:&lt;br/&gt;Yellowmark™ parts have the same form, fit, and function of premium Cat parts.&lt;br/&gt;Yellowmark™ parts are backed by Caterpillar’s &lt;a href=&#034;http://s7d2.scene7.com/is/content/Caterpillar/CM20190117-59725-60227&#034;&gt;Yellowmark™ parts warranty.&lt;/a&gt;',
    category: 'Drive Train',
    subCategory: 'Yellowmark™ Parts',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/3003659/0.jpg'],
  },
  {
    id: '00wlJVjRMAptQIkWtoWT',
    slug: '/parts/8t-2883',
    partName: ' Tee Adapter',
    partNumber: '8T-2883',
    brand: 'Cat',
    shortDescription: 'Fluid Carrying Tee Adapter',
    longDescription:
      'Description:&lt;/br&gt;Cat® Fluid Carrying Adapters are held to the highest standards of quality and reliability. These adapters are manufactured to exacting tolerances to ensure leak free connections. Each Cat Fluid Carrying Adapter is designed to meet or exceed industry standards for operating pressure, assembly torque capability, and corrosion protection to ensure a long life and proper machine functionality.&lt;/br&gt;&lt;/br&gt;Attributes:&lt;/br&gt;• Fluid carrying component&lt;/br&gt;• Designed to meet or exceed the performance of industry standard parts and provide leak free connections&lt;/br&gt;• The image provided is for reference only. Adapter construction may differ slightly from the image depicted, but the part is designed to be interchangeable with the OEM part.&lt;/br&gt;&lt;/br&gt;Applications:&lt;/br&gt;Adapters are designed to connect fluid carrying hoses and tubes to other system components. Consult your owner’s manual or contact your local Cat Dealer for more information.',
    category: 'Hydraulics',
    subCategory: 'Fittings and Adapters',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/1890129/0.jpg'],
  },
  {
    id: '00xzCsBREZJeyE1lNr2Y',
    slug: '/parts/260-6345',
    partName: ' Bearing Assembly-Swing',
    partNumber: '260-6345',
    brand: 'Cat',
    shortDescription: 'Cat® Swing Bearing Assembly',
    longDescription:
      'Description:&lt;br/&gt;Cat® bearings are designed for specific applications based on load, operating speed, temperature range, size, and performance. Cat® bearings are manufactured to the highest quality standards for long life and performance. Swing bearings are used where rotation is slow, oscillating or intermittent and can accommodate significant radial, thrust and moment loads.&lt;br/&gt;&lt;br/&gt;Attributes:&lt;br/&gt;• Swing bearing with internal gear&lt;br/&gt;• Material: Steel&lt;br/&gt;• Number of Teeth: 90&lt;br/&gt;• Inside Diameter: 573.5 mm (22.5787 in)&lt;br/&gt;• Outside Diameter: 748 mm (29.4488 in)&lt;br/&gt;• Height: 60 mm (2.36 in)&lt;br/&gt;• With lubrication hole&lt;br/&gt;&lt;br/&gt;Application:&lt;br/&gt;Used in undercarriage system of Cat Hydraulic Excavator. Consult your owner&#039;s manual or contact your local Cat Dealer for more information.',
    category: 'Drive Train',
    subCategory: 'Final Drive',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/1138485/0.jpg'],
  },
]

export const recentListMock: Part[] = [
  {
    id: '00tQMk3j0lCiJ68pE80f',
    slug: '/parts/377-7412',
    partName: ' TURBINE-CONV-YM',
    partNumber: '377-7412',
    brand: 'Yellowmark',
    shortDescription: 'Yellowmark™ Turbine',
    longDescription:
      '&lt;p&gt; Description:&lt;br/&gt;Yellowmark™ parts are mid-tier aftermarket parts for Cat® equipment.&lt;br/&gt;&lt;br/&gt;Attributes:&lt;br/&gt;Yellowmark™ parts have the same form, fit, and function of premium Cat parts.&lt;br/&gt;Yellowmark™ parts are backed by Caterpillar’s &lt;a href=&#034;http://s7d2.scene7.com/is/content/Caterpillar/CM20190117-59725-60227&#034;&gt;Yellowmark™ parts warranty.&lt;/a&gt;',
    category: 'Drive Train',
    subCategory: 'Yellowmark™ Parts',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/3003659/0.jpg'],
  },
  {
    id: '00wlJVjRMAptQIkWtoWT',
    slug: '/parts/8t-2883',
    partName: ' Tee Adapter',
    partNumber: '8T-2883',
    brand: 'Cat',
    shortDescription: 'Fluid Carrying Tee Adapter',
    longDescription:
      'Description:&lt;/br&gt;Cat® Fluid Carrying Adapters are held to the highest standards of quality and reliability. These adapters are manufactured to exacting tolerances to ensure leak free connections. Each Cat Fluid Carrying Adapter is designed to meet or exceed industry standards for operating pressure, assembly torque capability, and corrosion protection to ensure a long life and proper machine functionality.&lt;/br&gt;&lt;/br&gt;Attributes:&lt;/br&gt;• Fluid carrying component&lt;/br&gt;• Designed to meet or exceed the performance of industry standard parts and provide leak free connections&lt;/br&gt;• The image provided is for reference only. Adapter construction may differ slightly from the image depicted, but the part is designed to be interchangeable with the OEM part.&lt;/br&gt;&lt;/br&gt;Applications:&lt;/br&gt;Adapters are designed to connect fluid carrying hoses and tubes to other system components. Consult your owner’s manual or contact your local Cat Dealer for more information.',
    category: 'Hydraulics',
    subCategory: 'Fittings and Adapters',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/1890129/0.jpg'],
  },
  {
    id: '00xzCsBREZJeyE1lNr2Y',
    slug: '/parts/260-6345',
    partName: ' Bearing Assembly-Swing',
    partNumber: '260-6345',
    brand: 'Cat',
    shortDescription: 'Cat® Swing Bearing Assembly',
    longDescription:
      'Description:&lt;br/&gt;Cat® bearings are designed for specific applications based on load, operating speed, temperature range, size, and performance. Cat® bearings are manufactured to the highest quality standards for long life and performance. Swing bearings are used where rotation is slow, oscillating or intermittent and can accommodate significant radial, thrust and moment loads.&lt;br/&gt;&lt;br/&gt;Attributes:&lt;br/&gt;• Swing bearing with internal gear&lt;br/&gt;• Material: Steel&lt;br/&gt;• Number of Teeth: 90&lt;br/&gt;• Inside Diameter: 573.5 mm (22.5787 in)&lt;br/&gt;• Outside Diameter: 748 mm (29.4488 in)&lt;br/&gt;• Height: 60 mm (2.36 in)&lt;br/&gt;• With lubrication hole&lt;br/&gt;&lt;br/&gt;Application:&lt;br/&gt;Used in undercarriage system of Cat Hydraulic Excavator. Consult your owner&#039;s manual or contact your local Cat Dealer for more information.',
    category: 'Drive Train',
    subCategory: 'Final Drive',
    images: ['https://storage.googleapis.com/hdweb-9f081.appspot.com/products/1138485/0.jpg'],
  },
]