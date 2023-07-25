import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';
import MapDetailPage from '../pages/MapDetailPage';
import MyPage from '../pages/MyPage';
import NoticePage from '../pages/NoticePage';
import NoticeDetailPage from '../pages/NoticeDetailPage';
import InfoPage from '../pages/InfoPage';
import InfoDetailPage from '../pages/InfoDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import { MenuBar } from '../components/MenuBar';
import { ScrollToTop } from '../hooks/scrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map/:id" element={<MapDetailPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/info/:id" element={<InfoDetailPage />} />
      </Routes>
      <MenuBar />
    </BrowserRouter>
  );
}

export default Router;
