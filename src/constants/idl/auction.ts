export type Auction = {
  "version": "0.1.0",
  "name": "auction",
  "instructions": [
    {
      "name": "createAuction",
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
          "name": "auctionId",
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
          "name": "minPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editAuction",
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
          "name": "minPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteAuction",
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
      "name": "createBid",
      "accounts": [
        {
          "name": "bidder",
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
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateBid",
      "accounts": [
        {
          "name": "bidder",
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
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelBid",
      "accounts": [
        {
          "name": "bidder",
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
      "args": []
    },
    {
      "name": "claimBid",
      "accounts": [
        {
          "name": "bidder",
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
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "bidder",
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
            "name": "auctionId",
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
            "name": "minPrice",
            "type": "u64"
          },
          {
            "name": "bids",
            "type": {
              "array": [
                {
                  "defined": "Bid"
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
            "name": "state",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Bid",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bidder",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "claimed",
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
      "name": "InvalidPrice",
      "msg": "Bid price must be bigger than min price"
    },
    {
      "code": 6001,
      "name": "OutOfAuction",
      "msg": "Auction had finished or not exist"
    },
    {
      "code": 6002,
      "name": "NotFinishAuction",
      "msg": "Auction isn't finished"
    },
    {
      "code": 6003,
      "name": "OverMaxCount",
      "msg": "Over max count"
    },
    {
      "code": 6004,
      "name": "CreateBidError",
      "msg": "Error in crate bid"
    },
    {
      "code": 6005,
      "name": "UpdateBidError",
      "msg": "Error in update bid"
    },
    {
      "code": 6006,
      "name": "CancelBidError",
      "msg": "Error in cancel bid"
    },
    {
      "code": 6007,
      "name": "ClaimBidError",
      "msg": "Error in claim bid"
    },
    {
      "code": 6008,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    },
    {
      "code": 6009,
      "name": "AlreadyClaimedPrize",
      "msg": "Already claimed prize"
    },
    {
      "code": 6010,
      "name": "NotWinner",
      "msg": "Not winner"
    },
    {
      "code": 6011,
      "name": "ClaimPrizeError",
      "msg": "Error in claim prize"
    },
    {
      "code": 6012,
      "name": "SetWinnerError",
      "msg": "Error in set winner"
    },
    {
      "code": 6013,
      "name": "StartedAuction",
      "msg": "Auction already started"
    }
  ]
};

export const IDL: Auction = {
  "version": "0.1.0",
  "name": "auction",
  "instructions": [
    {
      "name": "createAuction",
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
          "name": "auctionId",
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
          "name": "minPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editAuction",
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
          "name": "minPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteAuction",
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
      "name": "createBid",
      "accounts": [
        {
          "name": "bidder",
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
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateBid",
      "accounts": [
        {
          "name": "bidder",
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
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelBid",
      "accounts": [
        {
          "name": "bidder",
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
      "args": []
    },
    {
      "name": "claimBid",
      "accounts": [
        {
          "name": "bidder",
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
      "args": []
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "bidder",
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
            "name": "auctionId",
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
            "name": "minPrice",
            "type": "u64"
          },
          {
            "name": "bids",
            "type": {
              "array": [
                {
                  "defined": "Bid"
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
            "name": "state",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Bid",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bidder",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "claimed",
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
      "name": "InvalidPrice",
      "msg": "Bid price must be bigger than min price"
    },
    {
      "code": 6001,
      "name": "OutOfAuction",
      "msg": "Auction had finished or not exist"
    },
    {
      "code": 6002,
      "name": "NotFinishAuction",
      "msg": "Auction isn't finished"
    },
    {
      "code": 6003,
      "name": "OverMaxCount",
      "msg": "Over max count"
    },
    {
      "code": 6004,
      "name": "CreateBidError",
      "msg": "Error in crate bid"
    },
    {
      "code": 6005,
      "name": "UpdateBidError",
      "msg": "Error in update bid"
    },
    {
      "code": 6006,
      "name": "CancelBidError",
      "msg": "Error in cancel bid"
    },
    {
      "code": 6007,
      "name": "ClaimBidError",
      "msg": "Error in claim bid"
    },
    {
      "code": 6008,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    },
    {
      "code": 6009,
      "name": "AlreadyClaimedPrize",
      "msg": "Already claimed prize"
    },
    {
      "code": 6010,
      "name": "NotWinner",
      "msg": "Not winner"
    },
    {
      "code": 6011,
      "name": "ClaimPrizeError",
      "msg": "Error in claim prize"
    },
    {
      "code": 6012,
      "name": "SetWinnerError",
      "msg": "Error in set winner"
    },
    {
      "code": 6013,
      "name": "StartedAuction",
      "msg": "Auction already started"
    }
  ]
};
