import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import { links } from "../../data/organization";
import Icon from "../Icon";
import logo from "../../assets/pngs/logo-small.png";

export const LoginModal = ({ isOpen, onClose, finalFocusRef }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const usernameRef = useRef(null);
  const requestRef = useRef(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setShowPassword(false);
      setError("");
      setIsLoading(false);
    }
    return () => {
      requestRef.current?.abort();
      requestRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (error && !isLoading) usernameRef.current?.focus();
  }, [error, isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setError("");
    const request = new AbortController();
    requestRef.current = request;
    const timeout = setTimeout(() => request.abort(), 10000);
    try {
      await login(username.trim(), password, request.signal);
      if (requestRef.current !== request) return;
      onClose();
      navigate("/members");
    } catch {
      if (requestRef.current === request)
        setError("Invalid credentials. Contact the admin Momo_King.");
    } finally {
      clearTimeout(timeout);
      if (requestRef.current === request) {
        setIsLoading(false);
        requestRef.current = null;
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      initialFocusRef={usernameRef}
      finalFocusRef={finalFocusRef}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg="rgba(3, 6, 9, 0.85)" backdropFilter="blur(9px)" />
      <ModalContent
        className="login-dialog"
        bg="#11171c"
        color="#f1f0eb"
        border="1px solid #344049"
        borderRadius="8px"
        maxW="460px"
        mx="4"
        overflow="hidden"
      >
        <ModalCloseButton top="5" right="5" aria-label="Close member login" />
        <ModalHeader px="8" pt="9" pb="0">
          <div className="login-emblem">
            <img
              src={logo}
              alt="Dark Water Privateers"
              width="68"
              height="70"
            />
          </div>
          <p className="eyebrow">DWPLLC · Member access</p>
          <h2>
            Welcome back,
            <br />
            <span>Privateer.</span>
          </h2>
        </ModalHeader>
        <ModalBody px="8" pb="8">
          <p className="login-description">
            Your crew. Your next opportunity.
            <br />
            Sign in to the member portal.
          </p>
          <form
            onSubmit={handleSubmit}
            className="login-form"
            aria-busy={isLoading}
          >
            <label htmlFor="login-username">Username</label>
            <input
              ref={usernameRef}
              id="login-username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              placeholder="Your member username"
              required
              readOnly={isLoading}
              spellCheck={false}
              autoCapitalize="none"
              aria-describedby={error ? "login-error" : undefined}
            />
            <label htmlFor="login-password">Password</label>
            <div className="password-field">
              <input
                id="login-password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Your password"
                required
                readOnly={isLoading}
                aria-describedby={error ? "login-error" : undefined}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((value) => !value)}
              >
                <Icon name="eye" size={19} />
              </button>
            </div>
            <div className="login-help">
              <span>
                <Icon name="lock" size={13} /> Members only
              </span>
              <a href={links.admin} target="_blank" rel="noopener noreferrer">
                Need access?
              </a>
            </div>
            {error && (
              <p className="login-error" id="login-error" role="alert">
                Invalid credentials. Contact the admin{" "}
                <a href={links.admin} target="_blank" rel="noopener noreferrer">
                  Momo_King
                </a>
                .
              </p>
            )}
            <button
              type="submit"
              className="button button-primary login-submit"
              aria-disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner" /> Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          <div className="login-join">
            <p>Not part of the crew yet?</p>
            <a
              href={links.rsi}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to Dark Water <Icon name="external" size={14} />
            </a>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
