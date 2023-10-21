import { useState } from 'react';
import Verified from './Verified';
import PickPassion from './pickPassion';
import { Upload } from 'lucide-react';
import UploadPhoto from './UploadPhoto';
import { TablelandInit, writeintoTable } from '../../configs/tableland-config';
import { Navigate } from 'react-router-dom';

function CreateProfile() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({});

  const addToProfile = (data) => {
    setProfile((prev) => {
      return { ...prev, ...data };
    });
    if (step == 3) submitProfile();
    else {
      setStep((prev) => prev + 1);
    }
  };

  const submitProfile = async () => {
    console.log({ profile });
    TablelandInit();
    await writeintoTable({ ...profile });
    console.log('DONE');
    confirm('ALERT! This is Sent to the Database');
  };
  if (step == 1) {
    return <Verified setProfile={addToProfile}></Verified>;
  } else if (step == 2) {
    return <PickPassion setProfile={addToProfile}></PickPassion>;
  } else if (step == 3) {
    return <UploadPhoto addToProfile={addToProfile}></UploadPhoto>;
  }
  return <Navigate to='/swipe'></Navigate>;
}
export default CreateProfile;
