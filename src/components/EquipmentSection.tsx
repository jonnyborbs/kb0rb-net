
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Antenna, Radio, Smartphone } from 'lucide-react';

const equipmentData = [
  {
    category: "Transceivers",
    icon: <Radio className="w-5 h-5" />,
    items: [
      "Yaesu FTM500D for VHF/UHF",
      "Icom IC7300 for HF",
      "AnyTone DV878II Plus HT for VHF/UHF and DMR",
      "Baofeng F8HP-Pro HT",
      "Tidradio H3 HT for GMRS",
      "QRZ-1 Explorer HT"
    ]
  },
  {
    category: "Antennas & Accessories",
    icon: <Antenna className="w-5 h-5" />,
    items: [
      "Diamond X-30A antenna for 2m/70cm",
      "Palomar BAS-71 9:1 unnun random wire end fed for HF",
      "Daiwa CN-901 SWR",
      "Tekpower TP50SW",
      "Palomar CMNF-500-50 noise filter"
    ]
  },
  {
    category: "Digital & Mesh",
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      "HamClock on Synology",
      "WSJT-X for FT8",
      "Meshtastic and LoRa devices",
      "B&O Station G2 with Airframes cavity filter and 10dbi antenna"
    ]
  }
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-20 px-6 md:px-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl font-bold mb-10 text-center"
        >
          My Equipment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentData.map((category, idx) => (
            <div
              key={category.category}
              className="h-full"
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2.5"></div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
