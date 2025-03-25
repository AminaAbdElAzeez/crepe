import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BranchesName.css';
import { Tooltip, Spin } from 'antd';
import { useTranslation } from 'react-i18next';

function BranchesName({ onBranchSelect }) {
  const color = '#333333';
  const { t, i18n } = useTranslation();
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL+'/api/front/cities', {
      headers: {
        'X-lang': i18n.language,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBranches(data.data);
        }
      })
      .catch((error) => console.error('❌ خطأ في جلب الفروع:', error))
      .finally(() => setLoading(false));
  }, []);

  const normalizeText = (text) =>
    text?.trim().toLowerCase().replace(/\s+/g, '');

  // const filteredBranches = branches.filter((branch) => {
  //   return normalizeText(branch.branch) === normalizeText(selectedBranch);
  // });

  const handleBranchClick = (branch) => {
    console.log(`📌 فرع تم اختياره: ${branch}`);

    onBranchSelect(branch);
  };
  if (loading) {
    return <Spin size='large' className='loading-spinner' />;
  }

  return (
    <section className='branches-name'>
      <div className='container'>
        <div className='branches-name-content'>
          {branches.map((branch, index) => (
            <Tooltip key={index} title={branch.name} color={color}>
              <Link to='#' onClick={() => handleBranchClick(branch.id)}>
              {branch.name}
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BranchesName;
