import React from 'react';
import { getImage } from '../../../../utils';
import { Button } from '../../../../components/ui/button';
import { useState, useEffect } from 'react';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import {
  oauthClientId,
  polygonTestnet,
  productName,
  web3AuthClientId,
  web3AuthLoginType,
  web3AuthVerifier,
} from '../../../../constants';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
import { ethers } from 'ethers';

export default function Login() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function initializeOpenLogin() {
      console.log('came');
      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: polygonTestnet.chainIdHex,
        rpcTarget: polygonTestnet.info.rpc,
        displayName: polygonTestnet.name,
        blockExplorer: polygonTestnet.explorer.url,
        ticker: polygonTestnet.symbol,
        tickerName: 'Ethereum',
      };

      const web3auth = new Web3AuthNoModal({
        clientId: web3AuthClientId,
        web3AuthNetwork: 'testnet',
        chainConfig: chainConfig,
      });

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig },
      });

      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          uxMode: 'popup',
          loginConfig: {
            google: {
              name: productName,
              verifier: web3AuthVerifier,
              typeOfLogin: web3AuthLoginType,
              clientId: oauthClientId,
            },
          },
        },
        loginSettings: {
          mfaLevel: 'none',
        },
        privateKeyProvider,
      });

      web3auth.configureAdapter(openloginAdapter);
      setWeb3auth(web3auth);
      await web3auth.init();
      setProvider(web3auth.provider);
    }

    initializeOpenLogin();
  }, []);
  const signIn = async () => {
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: 'google',
    });

    const ethProvider = new ethers.providers.Web3Provider(web3authProvider);
    const signer = await ethProvider.getSigner();
    const add = await signer.getAddress();
    console.log(add, 'address');
    console.log('web3authProvider', web3authProvider);
    setProvider(web3authProvider);
  };
  return (
    <section className='h-screen flex items-center'>
      <div className='container mx-auto w-full h-[80%] py-24 max-w-sm login-bg'>
        <div className='flex flex-col items-center'>
          <img
            src={getImage('logo_with_text.png')}
            alt='safe-date-logo'
            className='w-32 mb-24'
          ></img>
          <Button
            variant={'secondary'}
            onClick={() => {
              signIn();
            }}
          >
            Continue with Google
          </Button>
          <h3 className='text-white/50 text-center'>Login</h3>
        </div>
      </div>
    </section>
  );
}
