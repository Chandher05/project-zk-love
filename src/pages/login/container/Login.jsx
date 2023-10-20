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
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function initializeOpenLogin() {
      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: polygonTestnet.chainIdHex,
        rpcTarget: polygonTestnet.info.rpc,
        displayName: polygonTestnet.name,
        blockExplorer: polygonTestnet.explorer.url,
        ticker: polygonTestnet.symbol,
        tickerName: 'Mumbai',
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
    try {
      const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: 'twitter',
      });

      const ethProvider = new ethers.providers.Web3Provider(web3authProvider);
      const signer = await ethProvider.getSigner();
      const add = await signer.getAddress();
      console.log(add, 'address');
      console.log('web3authProvider', web3authProvider);
      setProvider(web3authProvider);
      navigate('/verify');
    } catch (e) {
      console.log(e);
      alert('Something went wrong' + JSON.stringify(e));
    }
  };
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='container mx-auto w-full h-full max-w-sm login-bg flex items-center justify-center px-0'>
        <div className='flex flex-col items-center w-full'>
          <img
            src={getImage('logo_with_text.png')}
            alt='safe-date-logo'
            className='w-1/2 mb-24'
          ></img>
          <h3 className='text-white/50 text-center mb-4'>Login</h3>
          <Button
            variant={'login'}
            onClick={() => {
              signIn();
            }}
            className='text-white border-1 border-[#E89402] hover:bg-transparent/80 rounded-lg'
          >
            Continue with{' '}
            <span>
              <img src={getImage('x_logo.svg')} alt='x logo' className='ml-2 w-4' />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
