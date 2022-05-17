const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const dragonDamage = Math.floor(Math.random() * 35) + 15;
  dragon.damage = dragonDamage;

  return dragonDamage;
};

const warriorAttack = () => {
  const warriorDamage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;
  warrior.damage = warriorDamage;

  return warriorDamage;
};

const mageAttack = () => {
  let mageDamage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence;
  if (mage.mana > 15) {
    mage.mana -= 15;
  } else {
    mageDamage = 'Não possui mana suficiente';
  }

  const mageManaAndDamage = {
    mageNewDamage: mageDamage,
    mageNewMana: mage.mana,
  };

  mage.damage = mageDamage;
  return mageManaAndDamage;
};

const gameActions = {
  warriorTurn: (func) => {
    const warriorTurnDamage = func();
    dragon.healthPoints -= warriorTurnDamage;
    return `O Guerreiro tirou ${warriorTurnDamage} pontos!\nO dragão está com ${dragon.healthPoints} pontos de vida.\n`;
  },

  mageTurn: (func) => {
    if (func().mageNewDamage === 'Não possui mana suficiente') {
    return `O mago está sem mana! Recarregue-a!\n`;
    } else {
    const mageTurnDamage = func().mageNewDamage;
    dragon.healthPoints -= mageTurnDamage;
    return `O mago tirou ${mageTurnDamage} pontos!\nO dragão está com ${dragon.healthPoints} pontos de vida.\n`;
    }
  },

  dragonTurn: (func) => {
    const dragonTurnDamage = func();
    warrior.healthPoints -= dragonTurnDamage;
    mage.healthPoints -= dragonTurnDamage;
    return `O dragão tirou ${dragonTurnDamage} pontos do guerreiro e do mago!\nO guerreiro está com ${warrior.healthPoints} pontos de vida e o mago com ${mage.healthPoints}.\n`
  },

  actualBattleMembers: () => {
    return battleMembers.mage, battleMembers.warrior, battleMembers.mage;
  },

};

console.log(gameActions.mageTurn(mageAttack));
console.log(mage.mana);

