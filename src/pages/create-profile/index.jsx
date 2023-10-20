import { useState } from 'react';
import Verified from './Verified';
import PickPassion from './pickPassion';
import { Upload } from 'lucide-react';
import UploadPhoto from './UploadPhoto';
import { TablelandInit, writeintoTable } from '../../configs/tableland-config';

function CreateProfile() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({});

  const addToProfile = (data) => {
    setProfile((prev) => {
      return { ...prev, ...data };
    });
    if (step == 3) submitProfile();
    setStep((prev) => prev + 1);
  };

  const submitProfile = () => {
    console.log({ profile });
    TablelandInit();
    writeintoTable({ ...profile });
  };
  if (step == 1) {
    return <Verified setProfile={addToProfile}></Verified>;
  } else if (step == 2) {
    return <PickPassion setProfile={addToProfile}></PickPassion>;
  } else if (step == 3) {
    return <UploadPhoto addToProfile={addToProfile}></UploadPhoto>;
  }
  return <>Profile Created</>;
}
export default CreateProfile;
