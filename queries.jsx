import { gql } from 'apollo-boost';

const GET_CHARACTERS = gql`
  query characters {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        location {
          id
          name
          dimension
        }
      }
    }
  }
`;

const GET_LOCATIONS = gql`
  query locations {
    locations {
      results {
        id
        name
        dimension
      }
    }
  }
`;

const GET_EPISODES = gql`
  query episodes {
    episodes {
      results {
        id
        name
        characters {
          name
        }
      }
    }
  }
`;

const GET_EPISODE_BY_ID = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      name
      characters {
        id
        name
      }
    }
  }
`;

const GET_LOCATION_BY_ID = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      residents {
        id
        name
      }
    }
  }
`;

const GET_CHARACTER_BY_ID = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        id
        name
        dimension
      }
    }
  }
`;

const GET_CHARACTERS_BY_DIMENSION = gql`
  query dimension($dimension: String) {
    locations(filter: { dimension: $dimension }) {
      results {
        id
        name
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`;

export default {
  GET_CHARACTERS,
  GET_LOCATIONS,
  GET_EPISODES,
  GET_EPISODE_BY_ID,
  GET_LOCATION_BY_ID,
  GET_CHARACTER_BY_ID,
  GET_CHARACTERS_BY_DIMENSION,
};
