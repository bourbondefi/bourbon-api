import {TokenAddresses as contracts} from "./TokenAddresses";
import {TokenSymbols as QuoteToken} from "./TokenSymbols";

export const farmsConfig = [
    {
        pid: 0,
        risk: 5,
        lpSymbol: 'BRRL-BUSD LP',
        lpAddresses: {
          97: '',
          56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33',
        },
        tokenSymbol: 'BRRL',
        tokenAddresses: {
          97: '',
          56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 1,
        risk: 5,
        isTokenOnly: true,
        lpSymbol: 'BRRL',
        lpAddresses: {
          97: '',
          56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33',
        },
        tokenSymbol: 'BRRL',
        tokenAddresses: {
          97: '',
          56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 2,
        risk: 3,
        lpSymbol: 'BRRL-BNB LP',
        lpAddresses: {
          97: '',
          56: '0xb9120b8881F577dB430966C6A8DdD0f993518295',
        },
        tokenSymbol: 'BRRL',
        tokenAddresses: {
          97: '',
          56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
      },
      {
        pid: 3,
        risk: 3,
        lpSymbol: 'USDT-BUSD LP',
        lpAddresses: {
          97: '',
          56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
        },
        tokenSymbol: 'USDT',
        tokenAddresses: {
          97: '',
          56: '0x55d398326f99059ff775485246999027b3197955',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 4,
        risk: 2,
        lpSymbol: 'BTCB-BNB LP',
        lpAddresses: {
          97: '',
          56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
        },
        tokenSymbol: 'BTCB',
        tokenAddresses: {
          97: '',
          56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
      },
      {
        pid: 5,
        risk: 4,
        lpSymbol: 'CAKE-BNB LP',
        lpAddresses: {
          97: '',
          56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
        },
        tokenSymbol: 'CAKE',
        tokenAddresses: {
          97: '',
          56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
      },
      {
        pid: 6,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'BUSD',
        lpAddresses: {
          97: '',
          56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33', // BRRL-BUSD LP (BUSD-BUSD will ignore)
        },
        tokenSymbol: 'BUSD',
        tokenAddresses: {
          97: '',
          56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 7,
        risk: 3,
        isTokenOnly: true,
        lpSymbol: 'WBNB',
        lpAddresses: {
          97: '',
          56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
        },
        tokenSymbol: 'WBNB',
        tokenAddresses: {
          97: '',
          56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 8,
        risk: 2,
        isTokenOnly: true,
        lpSymbol: 'BTCB',
        lpAddresses: {
          97: '',
          56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
        },
        tokenSymbol: 'BTCB',
        tokenAddresses: {
          97: '',
          56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 9,
        risk: 2,
        lpSymbol: 'ETH-BNB LP',
        lpAddresses: {
          97: '',
          56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
        },
        tokenSymbol: 'ETH',
        tokenAddresses: {
          97: '',
          56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
      },
      {
        pid: 10,
        risk: 2,
        isTokenOnly: true,
        lpSymbol: 'ETH',
        lpAddresses: {
          97: '',
          56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
        },
        tokenSymbol: 'ETH',
        tokenAddresses: {
          97: '',
          56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 11,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'DAI',
        lpAddresses: {
          97: '',
          56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
        },
        tokenSymbol: 'DAI',
        tokenAddresses: {
          97: '',
          56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 12,
        risk: 1,
        lpSymbol: 'DAI-BUSD LP',
        lpAddresses: {
          97: '',
          56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
        },
        tokenSymbol: 'DAI',
        tokenAddresses: {
          97: '',
          56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 13,
        risk: 4,
        isTokenOnly: true,
        lpSymbol: 'CAKE',
        lpAddresses: {
          97: '',
          56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
        },
        tokenSymbol: 'CAKE',
        tokenAddresses: {
          97: '',
          56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 14,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'USDC',
        lpAddresses: {
          97: '',
          56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
        },
        tokenSymbol: 'USDC',
        tokenAddresses: {
          97: '',
          56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 15,
        risk: 1,
        lpSymbol: 'USDC-BUSD LP',
        lpAddresses: {
          97: '',
          56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
        },
        tokenSymbol: 'USDC',
        tokenAddresses: {
          97: '',
          56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
      {
        pid: 16,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'USDT',
        lpAddresses: {
          97: '',
          56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
        },
        tokenSymbol: 'USDT',
        tokenAddresses: {
          97: '',
          56: '0x55d398326f99059ff775485246999027b3197955',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
      },
]