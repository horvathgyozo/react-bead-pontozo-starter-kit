export const criteria = {
  "name": "Verseny neve",
  "tasks": [
    {
      "name": "1. feladat",
      "aspects": [
        {
          "id": 11,
          "name": "1. szempont",
          "type": "list",
          "values": {
            "good": 5,
            "bad": 0
          },
          "required": true
        }
      ]
    },
    {
      "name": "2. feladat",
      "aspects": [
        {
          "id": 21,
          "name": "1. szempont",
          "description": "1. szempont leírása",
          "type": "number",
          "maxValue": 5,
          "required": true
        },
        {
          "id": 22,
          "name": "2. szempont",
          "description": "2. szempont leírása",
          "type": "number",
          "maxValue": 4,
          "required": true
        },
        {
          "id": 23,
          "name": "3. szempont",
          "description": "3. szempont leírása",
          "type": "number",
          "maxValue": 6,
          "required": true
        },
        {
          "id": 24,
          "name": "4. szempont",
          "description": "4. szempont leírása",
          "type": "number",
          "maxValue": 4,
          "required": false
        }
      ]
    },
    {
      "name": "3. feladat",
      "aspects": [
        {
          "id": 31,
          "name": "1. szempont",
          "type": "boolean",
          "value": 2
        }
      ]
    }
  ]
};
