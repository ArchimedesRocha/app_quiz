import styled from "styled-components";

export const HomeStyle = styled.div`
  .container-center {
    #home {
      width: 42rem;
      border: 0.1rem solid var(--color-blue-680);
      border-radius: 1.6rem;
      position: relative;
      background: var(--color-blue-750);
      .header-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        border-bottom: 0.1rem solid var(--color-blue-680);
        padding: 3.2rem 0;

        img {
          width: 90%;
          margin-bottom: 1.2rem;
        }
        h1 {
          font-size: 4.8rem;
          font-weight: bold;
          text-align: center;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: normal;
          text-align: center;
          color: var(--color-text-secondary);
        }
      }

      .buttons-card {
        padding: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.6rem;

        .init,
        .login {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.8rem 3.6rem;
          border: 0.1rem solid var(--color-green-300);
          border-radius: 0.8rem;
          a {
            color: var(--color-green-300);
          }
        }

        .create {
          span {
            font-size: 1.8rem;
            font-weight: normal;
            text-align: center;
            color: var(--color-text-secondary);
          }
          a {
            color: var(--color-green-300);
          }
        }
      }
    }
  }
`;
