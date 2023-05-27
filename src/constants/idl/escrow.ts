export type Escrow = {
  "version": "0.1.0",
  "name": "escrow",
  "instructions": [
    {
      "name": "depositCoin",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        }
      ]
    },
    {
      "name": "withdrawCoin",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "employee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        }
      ]
    },
    {
      "name": "depositToken",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        },
        {
          "name": "decimal",
          "type": "u8"
        }
      ]
    },
    {
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "employee",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        },
        {
          "name": "decimal",
          "type": "u8"
        }
      ]
    }
  ]
};

export const IDL: Escrow = {
  "version": "0.1.0",
  "name": "escrow",
  "instructions": [
    {
      "name": "depositCoin",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        }
      ]
    },
    {
      "name": "withdrawCoin",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "employee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        }
      ]
    },
    {
      "name": "depositToken",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        },
        {
          "name": "decimal",
          "type": "u8"
        }
      ]
    },
    {
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "employeer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "employee",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "jobId",
          "type": "string"
        },
        {
          "name": "amountHigh",
          "type": "u32"
        },
        {
          "name": "amountLow",
          "type": "u32"
        },
        {
          "name": "decimal",
          "type": "u8"
        }
      ]
    }
  ]
};
