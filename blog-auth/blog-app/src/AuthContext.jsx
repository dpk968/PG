import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    setUser({ username, password });
  };

  const logout = () => {
    setUser(null);
  };

  const jsonData = [
    {
        id: 1,
        title: 'His mother had always taught him',
        description: 'His mother had always taught him not to ever think of himself as better than others. He had tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 2,
        title: 'He was an expert but not in a discipline',
        description: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 3,
        title: 'Dave watched as the forest burned up on the hill.',
        description: 'Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they could not leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 4,
        title: 'All he wanted was a candy bar.',
        description: 'All he wanted was a candy bar. It did not seem like a difficult request to comprehend, but the clerk remained frozen and did not seem to want to honor the request. It might have had something to do with the gun pointed at his face.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 5,
        title: 'Hopes and dreams were dashed that day.',
        description: 'Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it was not and the hopes and dreams came crashing down.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 6,
        title: 'Dave was not exactly sure how he had ended up',
        description: 'Dave was not exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still did not make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 7,
        title: 'This is important to remember.',
        description: 'This is important to remember. Love is not like pie. You do not need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It does not run out, so do not try to hold back giving it as if it may one day run out. Give it freely and as much as you want.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 8,
        title: 'One can cook on and with an open fire.',
        description: 'One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it is best to slowly rotate it.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 9,
        title: 'There are different types of secrets.',
        description: 'There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you did not tell someone about it, but it could end up getting you killed if you did.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 10,
        title: 'They rushed out the door.',
        description: 'They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they were not leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 11,
        title: 'It was not quite yet time to panic.',
        description: 'It was not quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there was not time to salvage the situation, but he continued to delude himself into believing there was.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 12,
        title: 'She was aware that things could go wrong.',
        description: 'She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 13,
        title: 'She wanted rainbow hair.',
        description: 'She wanted rainbow hair. That is what she told the hairdresser. It should be deep rainbow colors, too. She was not interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 14,
        title: 'The paper was blank.',
        description: 'The paper was blank. It should not have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing was not there was frustrating. Actually, it was even more than frustrating. It was downright distressing.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
      {
        id: 15,
        title: 'The trees, therefore, must be such old',
        description: 'The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably did not have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.',
        comments: [
          {
            author: 'John Doe',
            content: 'Great post!',
          },
          {
            author: 'Jane Smith',
            content: 'I learned a lot from this.',
          },
          {
            author: 'Alice Johnson',
            content: 'Interesting read!',
          },
        ],
      },
    
  ];

  return (
    <AuthContext.Provider value={{ user, login, logout, jsonData}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
