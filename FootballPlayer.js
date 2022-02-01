class FootballPlayer {
  constructor(
    // Defines parameters:
    name,
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
    this.height = height;
    this.weight = weight;
    this.years = years;
    this.position = position;
    this.touchdowns = touchdowns;
    this.interceptions = interceptions;
    this.yards = yards;
    this.rushyards = rushyards;
  }
}

export default FootballPlayer;
