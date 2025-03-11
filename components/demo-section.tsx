"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, Maximize, Volume2, VolumeX, Shield } from "lucide-react"
import Script from "next/script"

// Define YouTube Player type
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isYouTubeApiReady, setIsYouTubeApiReady] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const playerRef = useRef<any>(null)
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressIntervalRef = useRef<number | null>(null)

  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  // Single video ID
  const videoId = "ICZrd_Q-H5I"
  const videoTitle = "SecuraBox Security Demo"
  const videoDescription = "See how SecuraBox protects your digital life with AI-powered security features"

  // Initialize YouTube API
  useEffect(() => {
    // Only set up YouTube API once
    if (typeof window !== "undefined" && !window.YT) {
      window.onYouTubeIframeAPIReady = () => {
        setIsYouTubeApiReady(true)
      }
    } else if (typeof window !== "undefined" && window.YT) {
      setIsYouTubeApiReady(true)
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [])

  // Initialize YouTube player when API is ready
  useEffect(() => {
    if (!isYouTubeApiReady || !playerContainerRef.current) return

    playerRef.current = new window.YT.Player(playerContainerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0, // Disable fullscreen button
      },
      events: {
        onReady: (event: any) => {
          setDuration(event.target.getDuration())
          setIsMuted(event.target.isMuted())
          setIsPlayerReady(true) // Mark player as ready when onReady is called
        },
        onStateChange: (event: any) => {
          // Update playing state based on YouTube player state
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING)

          // Start/stop progress tracking
          if (event.data === window.YT.PlayerState.PLAYING) {
            startProgressTracking()
          } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            stopProgressTracking()
          }
        },
      },
    })

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [isYouTubeApiReady, videoId])

  // Handle visibility changes
  useEffect(() => {
    if (isInView && isPlayerReady) {
      if (isPlaying && playerRef.current && playerRef.current.playVideo) {
        playerRef.current.playVideo()
      }
    } else if (isPlayerReady) {
      if (playerRef.current && playerRef.current.pauseVideo) {
        playerRef.current.pauseVideo()
        setIsPlaying(false)
      }
    }
  }, [isInView, isPlaying, isPlayerReady])

  const startProgressTracking = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    progressIntervalRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime && playerRef.current.getDuration) {
        const currentTime = playerRef.current.getCurrentTime()
        const duration = playerRef.current.getDuration()
        setCurrentTime(currentTime)
        setProgress((currentTime / duration) * 100)
      }
    }, 1000)
  }

  const stopProgressTracking = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }
  }

  const togglePlay = () => {
    if (!playerRef.current || !isPlayerReady) return

    if (isPlaying && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo()
    } else if (playerRef.current.playVideo) {
      playerRef.current.playVideo()
    }
  }

  const toggleMute = () => {
    if (!playerRef.current || !isPlayerReady) return

    if (isMuted && playerRef.current.unMute) {
      playerRef.current.unMute()
      setIsMuted(false)
    } else if (playerRef.current.mute) {
      playerRef.current.mute()
      setIsMuted(true)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !duration || !isPlayerReady || !playerRef.current.seekTo) return

    const progressBar = e.currentTarget
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
    const progressBarWidth = progressBar.clientWidth
    const seekTime = (clickPosition / progressBarWidth) * duration

    playerRef.current.seekTo(seekTime, true)
    setProgress((seekTime / duration) * 100)
  }

  const handleFullscreen = () => {
    if (!playerRef.current || !isPlayerReady || !playerRef.current.getIframe) return

    // Use the iframe's native fullscreen API
    const iframe = playerRef.current.getIframe()
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen()
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen()
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen()
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen()
      }
    }
  }

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <section id="demo" className="py-24">
      {/* YouTube API Script */}
      <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6"
        >
          <Play className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">See it in action</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the future of digital security
        </motion.h2>

        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {videoDescription}
        </motion.p>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative">
        {/* Video title */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">{videoTitle}</h3>
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl shadow-green-500/5 relative aspect-video"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* YouTube Player Container */}
          <div className="absolute inset-0 bg-black">
            {!isYouTubeApiReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Loading video...</h3>
                </div>
              </div>
            )}
            <div ref={playerContainerRef} className="w-full h-full" />
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="w-full h-1 bg-zinc-700 rounded-full mb-4 cursor-pointer" onClick={handleProgressClick}>
              <div className="h-full bg-green-500 rounded-full relative" style={{ width: `${progress}%` }}>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div className="text-sm text-zinc-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <button
                onClick={handleFullscreen}
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Password Management",
              description: "Securely store and manage all your passwords in one place",
            },
            {
              title: "Real-time Protection",
              description: "AI-powered security that monitors and protects your data 24/7",
            },
            {
              title: "Cross-platform Sync",
              description: "Access your secure data from any device, anywhere",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(34, 197, 94, 0.3)" }}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

