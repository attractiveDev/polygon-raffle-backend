export type Raffle = {
  "version": "0.1.0",
  "name": "raffle",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "raffleId",
          "type": "u64"
        },
        {
          "name": "startTime",
          "type": "u32"
        },
        {
          "name": "endTime",
          "type": "u32"
        },
        {
          "name": "totalTicket",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startTime",
          "type": "u32"
        },
        {
          "name": "endTime",
          "type": "u32"
        },
        {
          "name": "totalTicket",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setWinner",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "slothash",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffleId",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u32"
          },
          {
            "name": "endTime",
            "type": "u32"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "buyers",
            "type": {
              "array": [
                {
                  "defined": "Buyer"
                },
                100
              ]
            }
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "totalTicket",
            "type": "u32"
          },
          {
            "name": "purchasedTicket",
            "type": "u32"
          },
          {
            "name": "state",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "purchasedTicket",
            "type": "u32"
          },
          {
            "name": "isWinner",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAmount",
      "msg": "Amount should be bigger than 0"
    },
    {
      "code": 6001,
      "name": "NotFinishRaffle",
      "msg": "Raffle isn't finished"
    },
    {
      "code": 6002,
      "name": "OverMaxCount",
      "msg": "Over max count"
    },
    {
      "code": 6003,
      "name": "OutOfRaffle",
      "msg": "Raffle had finished or not exist"
    },
    {
      "code": 6004,
      "name": "AlreadySetWinner",
      "msg": "Alreay set winner"
    },
    {
      "code": 6005,
      "name": "SetWinnerError",
      "msg": "Error in set winner"
    },
    {
      "code": 6006,
      "name": "StartedRaffle",
      "msg": "Raffle already started"
    },
    {
      "code": 6007,
      "name": "TooManyTicket",
      "msg": "Too many ticket"
    },
    {
      "code": 6008,
      "name": "NotWinner",
      "msg": "Not winner"
    },
    {
      "code": 6009,
      "name": "ClaimPrizeError",
      "msg": "Error in claim prize"
    }
  ]
};

export const IDL: Raffle = {
  "version": "0.1.0",
  "name": "raffle",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "raffleId",
          "type": "u64"
        },
        {
          "name": "startTime",
          "type": "u32"
        },
        {
          "name": "endTime",
          "type": "u32"
        },
        {
          "name": "totalTicket",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startTime",
          "type": "u32"
        },
        {
          "name": "endTime",
          "type": "u32"
        },
        {
          "name": "totalTicket",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteRaffle",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setWinner",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "slothash",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ataTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffleId",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u32"
          },
          {
            "name": "endTime",
            "type": "u32"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "buyers",
            "type": {
              "array": [
                {
                  "defined": "Buyer"
                },
                100
              ]
            }
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "totalTicket",
            "type": "u32"
          },
          {
            "name": "purchasedTicket",
            "type": "u32"
          },
          {
            "name": "state",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "purchasedTicket",
            "type": "u32"
          },
          {
            "name": "isWinner",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAmount",
      "msg": "Amount should be bigger than 0"
    },
    {
      "code": 6001,
      "name": "NotFinishRaffle",
      "msg": "Raffle isn't finished"
    },
    {
      "code": 6002,
      "name": "OverMaxCount",
      "msg": "Over max count"
    },
    {
      "code": 6003,
      "name": "OutOfRaffle",
      "msg": "Raffle had finished or not exist"
    },
    {
      "code": 6004,
      "name": "AlreadySetWinner",
      "msg": "Alreay set winner"
    },
    {
      "code": 6005,
      "name": "SetWinnerError",
      "msg": "Error in set winner"
    },
    {
      "code": 6006,
      "name": "StartedRaffle",
      "msg": "Raffle already started"
    },
    {
      "code": 6007,
      "name": "TooManyTicket",
      "msg": "Too many ticket"
    },
    {
      "code": 6008,
      "name": "NotWinner",
      "msg": "Not winner"
    },
    {
      "code": 6009,
      "name": "ClaimPrizeError",
      "msg": "Error in claim prize"
    }
  ]
};
