import React from 'react';
import FilterBar from '../filter/filter.jsx';
import './catalog.css'; 

const CatalogPage = () => {
  const equipments = [
    { id: 1, 
      title: "Backpack", 
      description: "Rollpack Proof 26 - Daypack", 
      price: "78.54 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/502-6757-0211/aevor-rollpack-proof-26-daypack.jpg" 
    },
    { id: 2, 
      title: "Bottle", 
      description: "Seeker 2L - Water bottle", 
      price: "25.17 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/533-1342-0111/hydrapak-seeker-2l-water-bottle.jpg" 
    },
    { id: 3, 
      title: "Walking socks", 
      description: "Merino Wool Cushion Heavy Long Socks", 
      price: "17.62 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/201-4883-0311/stoic-merino-wool-silk-hiking-socks-walking-socks.jpg" 
    },
    { id: 4, 
      title: "Walking socks", 
      description: "Merino Hiking Crew Socks", 
      price: "14.68 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/201-3151-0711/stoic-merino-hiking-crew-socks-walking-socks.jpg" 
    },
    { id: 5, 
      title: "Pullover", 
      description: "Merino260 StadjanSt. Zip Pullover", 
      price: "73.08 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/005-3489-1311/stoic-merino260-stadjanst-hoody-merino-hoodie.jpg" 
    },
    { id: 6, 
      title: "Jacket", 
      description: "Women's Merino260 StadjanSt. Jacket", 
      price: "80.65 €", 
      photo: "https://www.bfgcdn.com/600_600_90/105-3172-0311/stoic-womens-merino260-stadjanst-jacket-merino-jacket.jpg" 
    },
    { id: 7, 
      title: "Backpack", 
      description: "Padje Light 45", 
      price: "196.61 €", 
      photo: "https://www.bfgcdn.com/600_600_90/502-7832-0411/lowe-alpine-airzone-trail-30-walking-backpack.jpg" 
    },
    { id: 8, 
      title: "Softshell jacket", 
      description: "Women's Madris Light ML Hooded Jacket", 
      price: "107.11 €", 
      photo: "https://www.bfgcdn.com/1500_1500_90/103-1819-0311/mammut-womens-madris-light-ml-hooded-jacket-softshell-jacket.jpg"
    },
];

const groupItems = (equipments, groupSize) => {
  const rows = [];
  for (let i = 0; i < equipments.length; i += groupSize) {
    rows.push(equipments.slice(i, i + groupSize));
  }
  return rows;
};

const groupedItems = groupItems(equipments, 4);

return (
  
  <div className="catalog-page">
    <FilterBar />
    {groupedItems.map((group, groupIndex) => (
      <div key={groupIndex} className="image-row">
        {group.map(item => (
          <div key={item.id} className="image-container">
            <img src={item.photo} alt={item.title} className="other-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    ))}
    
  </div>
);

};

export default CatalogPage;
