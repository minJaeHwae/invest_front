import { useState } from 'react';
import styles from './Invest.module.sass'
import { FaEthereum } from 'react-icons/fa'

function Invest() {
  const [amount, setAmount] = useState(0)

  // const invest = async () => {
  //   if (window.ethereum == null) {
  //       console.log("MetaMask not installed; using read-only defaults")
  //       provider = ethers.getDefaultProvider()
  //   } else {
  //       provider = new ethers.BrowserProvider(window.ethereum)
  //       signer = await provider.getSigner();
  //   }
  
  //   if (provider && signer) {
  //     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  
  //     if (!contract) {
  //       dispatch(addNotif({
  //         msg: "A problem occurred",
  //         type: "danger"
  //       }))
  //       return
  //     }
      
  //     const tx = await contract.mint(
  //       MINT_AMOUNT, 
  //       { 
  //         value: ethers.parseEther(`${nft.price}`)
  //       }
  //     )
  //     .catch(err => {
  //       if (err.code === "INSUFFICIENT_FUNDS") {
  //         dispatch(addNotif({
  //           msg: "Not enough funds",
  //           type: "danger"
  //         }))
  //       }
  //     });
  
  //     if (!tx) {
  //       return
  //     }
  
  //     setNft({})
  //     if (current == 8)
  //       dispatch(next())
        
  //     await tx.wait()
  //     .then(() => {
  //       dispatch(addNotif({
  //         msg: "Transaction successful"
  //       }))
  //       dispatch(addNotif({ msg: `You now own "${nft.name}"` }))
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       dispatch(addNotif({
  //         msg: "something went wrong during transaction",
  //         type: "danger"
  //       }))
  //     });
  //   }
  // };

  return (
    <section className={styles.invest} id='invest'>
      <h2>
        <span>Start now</span>
        <span>INVEST</span>
      </h2>
      <div className={styles.form}>
        <h3>INVESTING IS GOOD FOR HEALTH</h3>
        <p>Be one of the first to invest in this project and get a ton of benefits</p>
        <div>
          <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
          <FaEthereum />
        </div>
        <button className='btn'>INVEST</button>
      </div>
    </section>
  );
}

export default Invest;