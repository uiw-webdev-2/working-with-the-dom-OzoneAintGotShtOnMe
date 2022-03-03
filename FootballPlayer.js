class FootballPlayer {
  constructor(
    // Defines parameters:
    name,
    birthday,
    height,
    weight,
    number,
    position,
    years,
    touchdowns,
    interceptions,
    yards,
    rushyards
  ) {
    // Define properties:
    this.name = name;
    this.birthday = birthday;
    this.height = height;
    this.weight = weight;
    this.years = years;
    this.position = position;
    this.touchdowns = touchdowns;
    this.interceptions = interceptions;
    this.yards = yards;
    this.rushyards = rushyards;
  }
  footballAge() {
    let now = new Date();
    let birthday = new Date(this.birthday);
    let elapsed = now - acquired;
    let daysSinceBorn = Math.floor(elapsed / (1000 * 360 * 24));
    return daysSinceBorn;
}

export default FootballPlayer;
