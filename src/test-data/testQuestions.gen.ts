import type { CenterPerm, NSCenterTrainerState } from '#/utils/trainer/skewbUtils';

export const testQuestions: {
    question: NSCenterTrainerState,
    correctAnswer: CenterPerm,
}[] = [
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Pure/Solved"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "H Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Pure/Solved"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "H Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "H Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "H Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Swirl Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "H Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Z Perm Conjugate"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(255,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "O Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          1,
          0,
          0
        ],
        [
          0,
          -1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          1,
          0
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Wat Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,255,0)",
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show O centers (FRU)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,255,0)",
          "rgb(255,255,0)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,0,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)"
        ]
      ]
    },
    "correctAnswer": "X Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,166,0)",
        "rgb(0,255,0)",
        "rgb(255,0,0)",
        "rgb(255,255,0)",
        "rgb(0,0,255)"
      ],
      "rotation": [
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ],
        [
          -1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Horizontal U centers (LFR)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Triple Sledge"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(255,166,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          -1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          -1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,0,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,166,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(255,166,0)",
        "rgb(255,255,0)",
        "rgb(0,255,0)"
      ],
      "rotation": [
        [
          0,
          0,
          1
        ],
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(255,0,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(0,255,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(0,0,255)",
          "rgb(255,166,0)"
        ],
        [
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,0)"
        ]
      ]
    },
    "correctAnswer": "Vertical U Perm"
  },
  {
    "question": {
      "centers": [
        "rgb(255,0,0)",
        "rgb(0,0,255)",
        "rgb(0,255,0)",
        "rgb(255,166,0)",
        "rgb(255,255,0)"
      ],
      "rotation": [
        [
          0,
          -1,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          0,
          1
        ]
      ],
      "randomlyChosenTrainerType": "Show Vertical U centers (FUB)",
      "uCorners": [
        [
          "rgb(0,255,0)",
          "rgb(255,0,0)",
          "rgb(255,255,0)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,166,0)",
          "rgb(0,255,0)"
        ],
        [
          "rgb(255,166,0)",
          "rgb(255,255,0)",
          "rgb(0,0,255)"
        ],
        [
          "rgb(255,255,0)",
          "rgb(255,0,0)",
          "rgb(0,0,255)"
        ]
      ]
    },
    "correctAnswer": "Horizontal U Perm"
  }
];
