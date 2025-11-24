import Head from 'next/head'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Alert from '../components/Alert'
import { useState } from 'react';

export default function Kontak() {
  // State untuk form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Hapus error saat user mulai mengetik
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama wajib diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.subjek.trim()) {
      newErrors.subjek = 'Subjek wajib diisi';
    }
    
    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan wajib diisi';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ nama: '', email: '', subjek: '', pesan: '' });
      
      // Reset success message setelah beberapa detik
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const kategoriPertanyaan = [
    { value: 'informasi', label: 'Informasi Umum' },
    { value: 'pelayanan', label: 'Pelayanan' },
    { value: 'kegiatan', label: 'Kegiatan Gereja' },
    { value: 'donasi', label: 'Donasi' },
    { value: 'lainnya', label: 'Lainnya' }
  ];

  return (
    <Layout>
      <Head>
        <title>Kontak - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Hubungi Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Kontak Kami</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Informasi Kontak</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Jl. Ngagel Jaya No. 123, Surabaya, Jawa Timur</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">(031) 1234567</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">info@gerjatorajajemasurabaya.org</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Ibadah Minggu:<br />
                    Pelayanan I: 07.00 WIB<br />
                    Pelayanan II: 09.00 WIB<br />
                    Pelayanan III: 17.00 WIB
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Jam Operasional Kantor</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">08.00 - 16.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium">08.00 - 13.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium">Pelayanan Ibadah</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Kirim Pesan</h2>
              
              {submitSuccess && (
                <Alert variant="success" title="Pesan Terkirim">
                  Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda.
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
                <Input
                  label="Nama Lengkap"
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  error={errors.nama}
                  required
                />
                
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan alamat email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                
                <Select
                  label="Kategori Pertanyaan"
                  id="subjek"
                  name="subjek"
                  options={kategoriPertanyaan}
                  value={formData.subjek}
                  onChange={handleChange}
                  error={errors.subjek}
                  required
                />
                
                <div className="mb-4">
                  <label htmlFor="pesan" className="block text-gray-700 text-sm font-medium mb-1">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="5"
                    placeholder="Tulis pesan Anda di sini"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.pesan 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  ></textarea>
                  {errors.pesan && <p className="mt-1 text-sm text-red-600">{errors.pesan}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}